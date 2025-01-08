import { type ReactNode, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from '@/modules/ui/components/Header';
import { Footer } from '@/modules/ui/components/Footer';
import { Nav } from '@/modules/ui/components/Nav';

// import { Cookies } from '../Cookies';
// import { isBrowser } from '../../utils/helpers';
import { App } from '../App';
import { type AppContextType } from '../../contexts/AppContext';

export type PageLayoutProps = {
    locale: AppContextType['locale'];
    showHeader?: boolean;
    children: ReactNode;
};

export const PageLayout = ({ children, locale, showHeader }: PageLayoutProps) => {
    useEffect(() => {
        return () => {
            document.body.style.overflowY = 'visible';
        };
    }, []);

    const data = useStaticQuery(graphql`
        query LayoutQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <App locale={locale}>
            {showHeader && (
                <Header
                    siteTitle={data.site.siteMetadata?.title || `Stanisław Fortoński`}
                    isAnimate={true}
                />
            )}
            <Nav />
            <main className="layout-content">
                <div className="container mx-auto">{children}</div>
            </main>
            <Footer />

            {/* {isBrowser() && <Cookies />} */}
        </App>
    );
};
