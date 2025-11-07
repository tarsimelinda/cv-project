"use client";
import React from "react";
import "../css/homePage.css";
import { SparklesCore } from "../components/ui/sparkles";

export default function HomeSection() {
    return (
        <div id="home" className="home-section">
            <h1 className="home-title">
                Hi, I’m <span className="highlight">Melinda</span>, a Full-Stack Developer
            </h1>

            <div className="sparkles-container">
                <div className="line line-indigo blur" />
                <div className="line line-indigo" />
                <div className="line line-sky blur" />
                <div className="line line-sky" />

                <SparklesCore
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.8}
                    particleDensity={1800}
                    className="sparkles"
                    particleColor="#FFFFFF"
                />

                <div className="mask-gradient"></div>
            </div>
        </div>
    );
}
