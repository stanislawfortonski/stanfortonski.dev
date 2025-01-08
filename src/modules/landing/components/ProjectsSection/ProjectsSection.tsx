import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import {
    Slider,
    SliderContent,
    SliderSlide,
    SliderNavigation,
} from '@/modules/ui/components/Slider';
import { Frame } from '@/modules/ui/components/Frame';
import { useAppContext } from '@/modules/core/contexts/AppContext';
import { ButtonGatsbyLink } from '@/modules/ui/components/Button';

import { Section } from '../Section';

export const ProjectsSection = () => {
    const [runWebGLApp, setRunWebGLApp] = useState(false);
    const { locale } = useAppContext();

    return (
        <Section className="px-0" containerClass="">
            <h2 className="heading-1">
                <FormattedMessage id="index.projects.heading" />
            </h2>
            <h3 className="heading-4">
                <FormattedMessage id="index.projects.subtitle" />
            </h3>

            <Slider className="slider-modal mt-12">
                <SliderContent>
                    <SliderSlide>
                        <Frame className="modal--project" title="Stickman 3D: First Round">
                            <img
                                src="/images/projects/StickMan-3D.jpg"
                                alt="StickMan 3D"
                                className="modal__bg"
                            />
                            <div className="modal__button-placement">
                                <div>
                                    <a
                                        href="https://github.com/stanislawfortonski/StickMan-3D"
                                        className="button button--secondary button--chars-and-shadows mb-5"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FormattedMessage id="global.download" />
                                    </a>
                                </div>
                            </div>
                            <div className="modal__description-placement">
                                <FormattedMessage id="index.projects.stickman-description" />
                                <a
                                    className="anr no-text-shadow"
                                    href="https://stanislaw-fortonski.itch.io/stickman-3d-first-round"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    link
                                </a>
                            </div>
                        </Frame>
                    </SliderSlide>

                    <SliderSlide>
                        <Frame className="modal--project" title="Room Viewer WebGL">
                            {runWebGLApp ? (
                                <iframe
                                    src="https://stanislawfortonski.github.io/examples/webgl-room"
                                    className="modal__bg"
                                    title="Room Viewer WebGL"
                                ></iframe>
                            ) : (
                                <>
                                    <img
                                        src="/images/projects/webgl-room.jpg"
                                        alt="WebGL example app"
                                        className="modal__bg"
                                    />
                                    <div className="modal__button-placement">
                                        <div>
                                            <button
                                                className="button button--secondary button--chars-and-shadows mb-5"
                                                onClick={() => setRunWebGLApp(true)}
                                            >
                                                <FormattedMessage id="global.run" />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Frame>
                    </SliderSlide>

                    <SliderSlide>
                        <Frame className="modal--project" title="Terrain Generator">
                            <img
                                src="/images/projects/Procedural-Terrain-Generator-OpenGL.jpg"
                                alt="Terrain Generator OpenGL"
                                className="modal__bg"
                            />
                            <div className="modal__button-placement">
                                <div>
                                    <a
                                        href="https://github.com/stanislawfortonski/Procedural-Terrain-Generator-OpenGL"
                                        className="button button--secondary button--chars-and-shadows mb-5"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FormattedMessage id="global.download" />
                                    </a>
                                </div>
                            </div>
                            <div className="modal__description-placement">
                                <FormattedMessage id="index.projects.terrain-generator-description" />
                            </div>
                        </Frame>
                    </SliderSlide>
                </SliderContent>

                <SliderNavigation />
            </Slider>

            <ButtonGatsbyLink
                variant="chars-and-shadows"
                color="secondary"
                className="md:mt-20 mt-5"
                to={`/${locale}/projects`}
            >
                <FormattedMessage id="index.projects.button" />
            </ButtonGatsbyLink>
        </Section>
    );
};
