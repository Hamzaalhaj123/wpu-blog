import Button, { ButtonVariants, variants } from "@/components/shared/Button";
import { Separator } from "@/components/shared/Separator";
import { ThumbsUpIcon } from "lucide-react";
import { Fragment } from "react";

export default function DevelopmentPage() {
  const keys = Object.keys(variants) as (keyof ButtonVariants)[];
  const entries = keys.map((key) => ({
    variant: key,
    options: Object.keys(variants[key]),
  }));

  return (
    <section dir="ltr" className="container">
      <h2>This page is for development puropses</h2>
      {entries.map(({ variant, options }, i) => (
        <Fragment key={variant}>
          <h3 className="mb-6 text-2xl font-semibold text-primary">{variant}</h3>
          <ul className="mb-6 flex flex-wrap items-center gap-4">
            {options.length === 1
              ? entries
                  .filter((entry) => entry.variant !== variant)
                  .map(({ variant: otherVariant, options: otherOptions }) =>
                    otherOptions.map((otherOption) => (
                      <Button key={otherOption} {...{ [variant]: options[0], [otherVariant]: otherOption }}>
                        {variant === "icon" || otherVariant === "icon" ? (
                          <ThumbsUpIcon />
                        ) : (
                          `${variant} ${otherOptions.length === 1 ? otherVariant : otherOption}`
                        )}
                      </Button>
                    )),
                  )
              : options.map((option) => (
                  <Button key={option} {...{ [variant]: option }}>
                    {option}
                  </Button>
                ))}
          </ul>
          {i !== entries.length - 1 ? <Separator className="mb-12" /> : null}
        </Fragment>
      ))}
    </section>
  );
}
