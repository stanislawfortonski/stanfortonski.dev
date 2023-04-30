import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { SliderContext } from './Slider';

const defaultVariants = (current) => {
    return {
        initial: { left: `-${current * 100}%` },
        animate: {
            left: `-${current * 100}%`,
            transition: {
                stiffness: 20,
            },
        },
    };
};

export const SliderContent = ({ className, children, variants }) => {
    const { current, setCurrent, slides, setSlides } = useContext(SliderContext);

    useEffect(() => {
        setSlides(React.Children.toArray(children));

        slides.forEach((slide, index) => {
            if (slide.props.current) setCurrent(index);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children, setCurrent, setSlides]);

    return (
        <motion.div
            className={`slider-content ${className}`}
            variants={variants(current)}
            initial="initial"
            animate="animate"
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${current === index ? 'current' : ''}`}
                    onClick={() => setCurrent(index)}
                >
                    {slide}
                </div>
            ))}
        </motion.div>
    );
};

SliderContent.defaultProps = {
    className: '',
    variants: defaultVariants,
};

SliderContent.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    variants: PropTypes.func,
};
