import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';

import { App } from '@/modules/core/components/App';
import { Footer } from '@/modules/ui/components/Footer';
import { Nav } from '@/modules/ui/components/Nav';
import { Header } from '@/modules/ui/components/Header';
// import { Cookies } from '@/modules/core/components/Cookies';
// import { isBrowser } from '@/modules/core/utils/helpers';
import { type AppContextProps } from '@/modules/core/contexts/AppContext';

import { LoadingProgressBar } from '../LoadingProgressBar';
import './styles.css';

const monitorBlurVariants = {
    initial: { filter: 'blur(0px)' },
    animate: {
        filter: 'blur(1px)',
        transition: { delay: 2 },
    },
};

const hideProgressVariants = {
    initial: { opacity: 1 },
    animate: {
        opacity: 0,
        transition: { duration: 0.25, delay: 1 },
    },
};

export const LandingLayout = ({ children, locale }: AppContextProps) => {
    const [loaded, setLoaded] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);
    const data = useStaticQuery(graphql`
        query LandingLayoutQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    useEffect(() => {
        let delay = 2000;
        if (window.innerWidth < 750) delay = 0;

        setTimeout(() => {
            setLoaded(true);
            document.body.style.overflowY = 'hidden';

            setTimeout(() => {
                setShowLoadingScreen(false);
                document.body.style.overflowY = 'visible';
            }, 1000);
        }, delay);
    }, []);

    return (
        <App locale={locale}>
            <AnimatePresence>
                {showLoadingScreen && (
                    <div className="loading-screen">
                        <motion.div
                            className={classNames('monitor', { 'monitor--scale': loaded })}
                            variants={monitorBlurVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <div className="monitor__screen">
                                <motion.div
                                    className="progress-place"
                                    variants={hideProgressVariants}
                                >
                                    <LoadingProgressBar />
                                </motion.div>

                                <div className="website">
                                    <Header
                                        siteTitle={
                                            data.site.siteMetadata?.title || `Stanisław Fortoński`
                                        }
                                        isAnimate={false}
                                    />
                                    <Nav />
                                    <main className="layout-content">{children}</main>
                                    <Footer />
                                </div>
                            </div>
                            <div className="monitor__footer"></div>
                            <div className="monitor__holder"></div>
                            <div className="monitor__button"></div>
                        </motion.div>
                        <div className="loading-screen__desk"></div>
                    </div>
                )}
            </AnimatePresence>

            {loaded && (
                <>
                    <Header
                        siteTitle={data.site.siteMetadata?.title || `Stanisław Fortoński`}
                        isAnimate={true}
                    />
                    <Nav />
                    <main className="layout-content">{children}</main>
                    <Footer />
                    {/* {isBrowser() && <Cookies />} */}
                </>
            )}
        </App>
    );
};
