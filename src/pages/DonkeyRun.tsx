import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { asset } from "../lib/asset";

export function DonkeyRun() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    frameRef.current?.focus();
  }, []);

  return (
    <div className="run-page" data-engine="jssrf">
      <Header />
      <div className="run-wrap">
        <div className="run-hud">
          <Link className="btn btn-ghost" to="/play">
            Arcade
          </Link>
          <div>
            <b>Donkey Run</b>
            <span>Arrows or swipe</span>
          </div>
        </div>
        <div className="run-stage">
          <iframe
            ref={frameRef}
            className="run-frame"
            title="Donkey Run"
            src={`${asset("/games/donkey-run.html")}?v=2`}
            allow="autoplay"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  );
}
