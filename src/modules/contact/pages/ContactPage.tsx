import { FormattedMessage } from 'react-intl';

import { PageLayout } from '@/modules/core/components/PageLayout';
import { Seo } from '@/modules/core/components/Seo/Seo';
import { Frame } from '@/modules/ui/components/Frame';
import { type AppContextType } from '@/modules/core/contexts/AppContext';

import { ContactForm } from '../components/ContactForm';

export const ContactPage = ({ locale }: AppContextType) => {
    return (
        <PageLayout locale={locale}>
            <Seo locale={locale} title="contact.title" description="contact.description" />

            <div className="section">
                <h1 className="heading-1 text-center">
                    <FormattedMessage id="contact.title" />
                </h1>

                <p className="heading-4 text-center mb-12">
                    <FormattedMessage id="contact.subtitle-1" />
                    <br />
                    <FormattedMessage id="contact.subtitle-2" />
                </p>

                <div className="grid gap-8 grid-cols-1">
                    <Frame title={<FormattedMessage id="contact.form" />}>
                        <div className="md:px-24 md:py-10">
                            <ContactForm />
                        </div>
                    </Frame>

                    <Frame title={<FormattedMessage id="contact.email" />}>
                        <div className="text-center">
                            <FormattedMessage id="contact.email" />:
                            <a href="mailto:contact@stanfortonski.dev" className="anr">
                                contact@stanfortonski.dev
                            </a>
                        </div>
                    </Frame>

                    <Frame title={<FormattedMessage id="contact.media" />}>
                        <ul className="text-center">
                            <li className="pb-2 heading-5">
                                <FormattedMessage id="contact.visit" />
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/stanislaw-fortonski"
                                    className="anr"
                                >
                                    LinkedIn
                                </a>
                                <a href="https://github.com/stanislawfortonski" className="anr">
                                    GitHub
                                </a>
                                <a
                                    href="https://www.youtube.com/@StanislawFortonski"
                                    className="anr"
                                >
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </Frame>
                </div>
            </div>
        </PageLayout>
    );
};
