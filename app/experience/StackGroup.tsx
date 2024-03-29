import { Stack } from "@prisma/client";
import React from "react";
// import { Stack } from '@/data/schema';
// import { fetchedWorkStack } from '@/data/stack'
import StackCard from "@/components/StackCard";
import { StackResponse } from "@/lib/graphql/schema";

type Props = {
  sortedWorkStack: StackResponse[];
};

const StackGroup = ({ sortedWorkStack }: Props) => {
  // const sortedWorkStack: Stack[] = fetchedWorkStack.sort((a, b) => a.skill_work_order - b.skill_work_order);
  return (
    <div className="grid xl:grid-cols-9 sm:grid-cols-5 grid-cols-3 gap-7">
      {sortedWorkStack.map(
        (
          { name, logo_path_light, logo_path_dark, colour }: StackResponse,
          i
        ) => (
          <StackCard
            name={name}
            logo_path_light={logo_path_light}
            logo_path_dark={logo_path_dark}
            colour={colour}
            key={i}
          />
        )
      )}
    </div>
  );
};

export default StackGroup;
