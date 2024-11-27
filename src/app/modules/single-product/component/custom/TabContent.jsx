import React from "react";
import clsx from "clsx";

const TabContent = ({ activeTab }) => {
    return (
        <div className={clsx("tab-content", "animate__animated animate__fadeIn")}>
            {activeTab === "description" && (
                <div className="bg-light p-4">
                    <h1 className="my-3">Nike Free RN 2019 iD</h1>
                    <p className="fs-4">
                        On her way she met a copy. The copy warned the Little Blind Text,
                        that where it came from it would have been rewritten a thousand
                        times and everything that was left from its origin would be the word
                        "and" and the Little Blind Text should turn around and return to its
                        own, safe country. But nothing the copy said could convince her and
                        so it didn’t take long until a few insidious Copy Writers ambushed
                        her, made her drunk with Longe and Parole and dragged her into their
                        agency, where they abused her for their.
                    </p>
                </div>
            )}
            {activeTab === "manufacturer" && (
                <div className="bg-light p-4">
                    <h1 className="my-3">Manufactured By Nike</h1>
                    <p className="fs-4">
                        On her way she met a copy. The copy warned the Little Blind Text,
                        that where it came from it would have been rewritten a thousand
                        times and everything that was left from its origin would be the word
                        "and" and the Little Blind Text should turn around and return to its
                        own, safe country. But nothing the copy said could convince her and
                        so it didn’t take long until a few insidious Copy Writers ambushed
                        her, made her drunk with Longe and Parole and dragged her into their
                        agency, where they abused her for their.
                    </p>
                </div>
            )}
            {activeTab === "reviews" && (
                <div className="bg-light p-4">
                    <p className="fs-4">Customer reviews coming soon...</p>
                </div>
            )}
        </div>
    );
};

export default TabContent;
