import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";

const ContactoStepper = ({ inView }: { inView: boolean }) => {
  const [step, setStep] = React.useState({
    current: 0,
    total: 3,
    hasNext: true,
    hasPrev: false,
    valid: {
      name: false,
      email: false,
      comment: false,
    },
  });
  const nextStep = () => {
    if (step.current < step.total - 1) {
      setStep((prev) => ({
        ...prev,
        current: prev.current + 1,
        hasNext: prev.current + 1 < prev.total - 1,
        hasPrev: true,
      }));
    }
  };
  const prevStep = () => {
    if (step.current > 0) {
      setStep((prev) => ({
        ...prev,
        current: prev.current - 1,
        hasNext: true,
        hasPrev: prev.current - 1 > 0,
      }));
    }
  };

  return (
    <div className="w-full">
      {step.current === 0 && (
        <input
          type="text"
          placeholder="Nombre"
          className="w-full mb-4 p-1.5 2xl:p-2 rounded-md text-sm bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
          autoFocus={inView}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              nextStep();
            }
          }}
        />
      )}
      {step.current === 1 && (
        <input
          type="email"
          placeholder="Email"
          autoFocus={inView}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              nextStep();
            }
          }}
          className="w-full mb-4 p-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
        />
      )}
      {step.current === 2 && (
        <textarea
          placeholder="Comentario"
          className="w-full mb-4 p-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
          rows={4}
        />
      )}
      <div className="w-full bg-white/10 rounded-full h-0.5 mb-4">
        <motion.div
          className="bg-white h-0.5 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${((step.current + 1) / step.total) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="flex justify-between">
        {step.hasPrev ? (
          <Button
            onClick={prevStep}
            disabled={!step.hasPrev}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              step.hasPrev
                ? "bg-white/20 text-white hover:bg-white/30"
                : "bg-white/10 text-white/50 cursor-not-allowed"
            }`}
          >
            Anterior
          </Button>
        ) : (
          <div></div>
        )}
        <div className="flex space-x-2">
          {step.hasNext ? (
            <div className="flex items-center space-x-3">
              <Button
                onClick={nextStep}
                disabled={!step.hasNext}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  step.hasNext
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "bg-white/10 text-white/50 cursor-not-allowed"
                }`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    nextStep();
                  }
                }}
              >
                Continuar
              </Button>
              {inView && (
                <p className="text-xs text-white/50">
                  Enter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block w-5 h-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </p>
              )}
            </div>
          ) : (
            <Button
              onClick={() => alert("Formulario enviado!")}
              className="px-4 py-2 rounded-md text-sm font-medium bg-white/30 text-white hover:bg-white/40"
            >
              Enviar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ContactoStepper };
