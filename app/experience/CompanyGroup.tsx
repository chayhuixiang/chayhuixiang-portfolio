"use client";

import React, { useRef, useState, useCallback } from "react";
import CompanyCard from "@/components/CompanyCard";
import { CompanyResponse } from "@/lib/graphql/schema";
// import { Company } from '@/data/schema'
// import { fetchedCompanies } from '@/data/company'

type Props = {
  sortedCompanies: CompanyResponse;
};

const CompanyGroup = ({ sortedCompanies }: Props) => {
  // const sortedCompanies = fetchedCompanies.sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());
  const ref = useRef<HTMLDivElement>(null);
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const scrollHandler = () => {
    if (ref.current) {
      const scrollWidth = ref.current.scrollWidth - ref.current.clientWidth;
      setScrollPercentage(ref.current.scrollLeft / scrollWidth);
    }
  };

  const calculateMobileFocus = useCallback(
    (index: number) => {
      const n = sortedCompanies.length;
      let snap: number;
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768 && window.innerWidth >= 640) {
          const x = 1 / (n - 2);
          if (index === n - 1) {
            snap = 1;
          } else if (index === 0) {
            snap = 0;
          } else {
            snap = (0.5 + index - 1) * x;
          }
        } else {
          const x = 1 / (n - 1);
          snap = index * x;
        }

        return Math.abs(snap - scrollPercentage) <= 0.1;
      } else {
        return true;
      }
    },
    [scrollPercentage]
  );

  return (
    <>
      <h1 className="text-[1.75rem] leading-snug sm:text-[2.5rem]">
        Companies I’ve <span className="whitespace-nowrap">worked at</span>
      </h1>
      <div
        className="w-full mt-4 sm:mt-8 md:mt-32 flex flex-row gap-4 overflow-x-scroll pb-8 md:pb-32 snap-x snap-mandatory scrollbar scrollbar-track-zinc-100 dark:scrollbar-track-purple-dark scrollbar-thumb-purple dark:scrollbar-thumb-purple-light"
        ref={ref}
        onScroll={scrollHandler}
      >
        {sortedCompanies.map(
          (
            {
              name,
              position,
              logo_path_light,
              logo_path_dark,
              start_date,
              end_date,
              description,
              stacks,
              link,
            },
            i
          ) => (
            <CompanyCard
              key={i}
              focus={calculateMobileFocus(i)}
              name={name}
              position={position}
              logo_path_light={logo_path_light}
              logo_path_dark={logo_path_dark}
              start_date={start_date}
              end_date={end_date}
              description={description}
              stacks={stacks}
              link={link}
            />
          )
        )}
      </div>
    </>
  );
};

export default CompanyGroup;
