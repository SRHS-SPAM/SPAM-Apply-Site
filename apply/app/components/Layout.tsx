// components/Layout.tsx
"use client";

import styles from "../styles/Layout.module.css";
import useComponentSize from "../tool/size";
import { useSize } from "../tool/sizecheck";
import React from "react";

const Layout = () => {
    const write = ["이름", "학번", "이메일", "전화번호", "포트폴리오"];
    const write2 = ["지원동기", "코딩 관련 경험", "만들고싶은 서비스"];
    const { sizeValue, setGlobalSizeValue } = useSize();
    const [componentRef, size] = useComponentSize();
    let mt: string = "0px";
    let mt2: string = "0px";
    let fonts: string = "0px";
    let fonts2: string = "0px";
    let mw: string = "";
    let sh: string = "";
    let fd: string = "";
    let enter: string = "";
    type textal = "none" | "center";
    let ta: textal = "none" as textal;

    type FlexDirection = "row" | "column";

    if (size.width > 1030) {
        setGlobalSizeValue(true);
    } else {
        setGlobalSizeValue(false);
    }

    console.log(size.width);
    if (sizeValue) {
        enter = "18px 100px";
        fd = "row";
        mw = "270px";
        mt = "0px";
        fonts = "40px";
        fonts2 = "24px";
        ta = "none";
    } else {
        enter: "none";
        fd = "column";
        mw = "0px";
        mt = "35px";
        fonts = "28px";
        fonts2 = "28px";
        ta = "center";
    }
    if (sizeValue && size.width < 1540) {
        mt2 = "20px";
    }
    if (!sizeValue && size.width < 300) {
        fonts = "18px";
        mt = "30px";
    }
    const handleInputBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        e.target.blur();
    };

    return (
        <div ref={componentRef} className={styles.box}>
            <div className={styles.minibox}>
                <div
                    className={styles.top}
                    style={{ fontSize: fonts, marginTop: mt }}
                >
                    스팸의 구성원이 되어보세요!
                </div>

                <div className={styles.middle}>
                    <div className={styles.textbox}>
                        {write.map((index, key) => (
                            <div
                                className={styles.write}
                                style={{
                                    flexDirection: fd as FlexDirection,
                                    fontSize: fonts2,
                                }}
                                key={key}
                            >
                                {" "}
                                <div
                                    className={styles.text}
                                    style={{ textAlign: ta as textal }}
                                >
                                    {index}
                                </div>
                                <textarea
                                    className={styles.inputbox}
                                    style={{
                                        resize: "none",
                                        fontSize: "15px",
                                        minWidth: mw,
                                        height: sh,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.textbox} style={{ margin: mt2 }}>
                        {write2.map((index, key) => (
                            <div
                                className={styles.write}
                                key={key}
                                style={{
                                    flexDirection: fd as FlexDirection,
                                    fontSize: fonts2,
                                }}
                            >
                                <div
                                    className={styles.text}
                                    style={{ textAlign: ta as textal }}
                                >
                                    {index}
                                </div>
                                <textarea
                                    className={styles.inputbox2}
                                    style={{
                                        resize: "none",
                                        fontSize: "14px",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.bottom} style={{ padding: enter }}>
                    제출하기
                </div>
            </div>
        </div>
    );
};

export default Layout;
