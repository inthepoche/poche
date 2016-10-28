<?php

namespace Wallabag\CoreBundle\Command;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\NoResultException;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Wallabag\UserBundle\Entity\User;

class TagAllCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('wallabag:tag:all')
            ->setDescription('Tag all entries using the tagging rules.')
            ->addArgument(
               'username',
               InputArgument::REQUIRED,
               'User to tag entries for.'
            )
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        try {
            $user = $this->getUser($input->getArgument('username'));
        } catch (NoResultException $e) {
            $output->writeln(sprintf('<error>User "%s" not found.</error>', $input->getArgument('username')));

            return 1;
        }
        $tagger = $this->getContainer()->get('wallabag_core.rule_based_tagger');

        $output->write(sprintf('Tagging entries for user « <comment>%s</comment> »... ', $user->getUsername()));

        $entries = $tagger->tagAllForUser($user);

        $output->writeln('<info>Done.</info>');
        $output->write(sprintf('Persist entries ... ', $user->getUsername()));

        /** @var ObjectManager $em */
        $em = $this->getDoctrine()->getManager();
        foreach ($entries as $entry) {
            $em->persist($entry);
        }
        $em->flush();

        $output->writeln('<info>Done.</info>');
    }

    /**
     * Fetches a user from its username.
     *
     * @param string $username
     *
     * @return User
     */
    private function getUser($username)
    {
        return $this->getDoctrine()->getRepository('WallabagUserBundle:User')->findOneByUserName($username);
    }

    private function getDoctrine()
    {
        return $this->getContainer()->get('doctrine');
    }
}
