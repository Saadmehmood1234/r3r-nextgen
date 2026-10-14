"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { process } from "@/lib/site";

export function ProcessSteps() {
  return (
    <section className="section-y relative isolate overflow-hidden lg:pb-0">
      <Image
        src="/images/process-bg.png"
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="-z-20 hidden object-cover object-center sm:object-[center_40%] lg:block lg:object-center"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 hidden h-32 bg-linear-to-b from-transparent via-[#F8F3E7]/80 to-[#F8F3E7] sm:h-48 lg:block"
      />

      <div className="container-page relative z-10">
        <Reveal y={24}>
          <SectionHeading
            eyebrow="Our Process"
            title="From Concept to Creation"
            text="A structured product development and manufacturing process to ensure quality, safety and innovation."
          />
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-2 items-stretch gap-x-4 gap-y-8 px-2 sm:grid-cols-4 sm:gap-x-5 sm:gap-y-10 sm:px-4 lg:grid-cols-7 lg:gap-x-3 lg:bg-[#F8F3E7] lg:pb-14">
          {process.map((step, index) => (
            <RevealItem key={step.title} className="relative h-full min-w-0">
              <li className="relative flex h-full w-full flex-col items-center gap-3 text-center">
                <span className="grid size-14 shrink-0 place-items-center rounded-full border-2 border-leaf/30 bg-white text-leaf shadow-soft sm:size-16 lg:size-20">
                  <Icon
                    name={step.icon}
                    size={28}
                    className="size-8 lg:size-10"
                  />
                </span>

                <span className="max-w-full text-xs font-semibold leading-snug sm:text-sm">
                  {step.title}
                </span>

                {index < process.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-3 top-5 hidden size-4 text-leaf/60 lg:block"
                  />
                )}
              </li>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
