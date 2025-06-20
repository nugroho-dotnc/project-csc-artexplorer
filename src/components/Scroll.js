import { Children, useEffect, useRef, useState } from "react";

export default function Scroll({ children,  }) {
    const ref = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${isVisible ? "fade-in" : "fade-out"} transition-opacity duration-500`}
        >
            {children}
        </div>
    );
}