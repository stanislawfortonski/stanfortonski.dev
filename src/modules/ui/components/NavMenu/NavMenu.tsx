import { motion } from 'framer-motion';
import { FormattedMessage, useIntl } from 'react-intl';

import { useLocation } from '@/modules/core/hooks/useLocation';

import { Modal, ModalBody, ModalHeader, ModalTitle } from '../Modal';
import { CloseButton } from '../Frame/CloseButton';
import { ButtonGatsbyLink } from '../Button';
import './styles.css';

const navMenuOverlayVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 },
    },
};

const navMenuVariants = {
    initial: { y: '-100%' },
    animate: {
        y: 0,
        transition: { type: 'spring', stiffness: 85 },
    },
    exit: { y: '-100%' },
};

export type NavMenuProps = {
    toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
};

export const NavMenu = ({ toggleMenu }: NavMenuProps) => {
    const intl = useIntl();
    const { pathname } = useLocation();

    return (
        <motion.div
            className="nav__menu-overlay"
            variants={navMenuOverlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div className="nav__menu" variants={navMenuVariants}>
                <Modal>
                    <ModalHeader>
                        <ModalTitle>Menu</ModalTitle>
                        <CloseButton onClick={toggleMenu} />
                    </ModalHeader>
                    <ModalBody>
                        <ul>
                            <li>
                                <ButtonGatsbyLink
                                    variant="chars-and-shadows"
                                    className="w-full mb-5"
                                    activeClassName="button--active"
                                    to={`/${intl.locale}`}
                                >
                                    Start
                                </ButtonGatsbyLink>
                            </li>
                            <li>
                                <ButtonGatsbyLink
                                    variant="chars-and-shadows"
                                    className="w-full mb-5"
                                    to={`/${intl.locale}/projects`}
                                    activeClassName="button--active"
                                >
                                    <FormattedMessage id="projects.title" />
                                </ButtonGatsbyLink>
                            </li>
                            <li>
                                <ButtonGatsbyLink
                                    variant="chars-and-shadows"
                                    className="w-full mb-5"
                                    to={`/${intl.locale}/contact`}
                                    activeClassName="button--active"
                                >
                                    <FormattedMessage id="contact.title" />
                                </ButtonGatsbyLink>
                            </li>
                            <li>
                                <a
                                    className="button button--primary button--chars-and-shadows w-full mb-5"
                                    href="https://github.com/stanislawfortonski"
                                >
                                    <FormattedMessage id="global.my-gitHub" />
                                </a>
                            </li>
                            <li>
                                <span className="text-white text-2xl">
                                    <FormattedMessage id="global.choose-language" />
                                </span>
                                <div className="flex justify-center gap-8 mt-1">
                                    <ButtonGatsbyLink
                                        variant="chars-and-shadows"
                                        className="mb-5 px-4"
                                        to={`/en/${pathname}`}
                                        activeClassName="button--active"
                                    >
                                        EN
                                    </ButtonGatsbyLink>

                                    <ButtonGatsbyLink
                                        variant="chars-and-shadows"
                                        className="mb-5 px-4"
                                        to={`/pl/${pathname}`}
                                        activeClassName="button--active"
                                    >
                                        PL
                                    </ButtonGatsbyLink>
                                </div>
                            </li>
                        </ul>
                    </ModalBody>
                </Modal>
            </motion.div>
        </motion.div>
    );
};
