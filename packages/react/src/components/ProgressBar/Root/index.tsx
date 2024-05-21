import { Stack, useTheme } from "@mui/material";

import { ProgressBar } from "..";

export type ProgressBarRoot = {
  steps: string[];
  currentStep?: number;
};

export const ProgressBarRoot = ({
  steps,
  currentStep = 0,
}: ProgressBarRoot) => {
  const theme = useTheme();

  const variantSelector = (index: number) => {
    if (index + 1 < currentStep) {
      return "completed";
    } else if (index + 1 === currentStep) {
      return "active";
    } else {
      return "waiting";
    }
  };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "center",
      }}
    >
      {steps.map((step, index) => {
        console.log(index, variantSelector(index), currentStep);

        return (
          <>
            <ProgressBar.Item
              label={step}
              variant={variantSelector(index)}
              step={index + 1}
            />
            {index !== steps.length - 1 && (
              <Stack
                sx={{
                  width: "100%",
                  height: 4,
                  mt: "14px",
                  mx: -4,
                  zIndex: 0,
                  backgroundColor:
                    variantSelector(index + 1) === "waiting"
                      ? "#94ADFF"
                      : theme.palette.primary.main,
                }}
              />
            )}
          </>
        );
      })}
    </Stack>
  );
};
