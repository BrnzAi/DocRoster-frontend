import React from "react";
import { AppointmentInfoSection } from "./sections/AppointmentInfoSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { DoctorCardSection } from "./sections/DoctorCardSection";
import { DoctorDetailsSection } from "./sections/DoctorDetailsSection";
import { FilterOptionsSection } from "./sections/FilterOptionsSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NoResultsSection } from "./sections/NoResultsSection";
import { PaginationSection } from "./sections/PaginationSection";
import { ResultsContainerSection } from "./sections/ResultsContainerSection";
import { ResultsHeaderSection } from "./sections/ResultsHeaderSection";
import { ResultsListSection } from "./sections/ResultsListSection";
import { SearchBarSection } from "./sections/SearchBarSection";
import { SearchFunctionalitySection } from "./sections/SearchFunctionalitySection";
import { SpecialistListSection } from "./sections/SpecialistListSection";

export const SearchScreen = () => {
  return (
    <div
      className="bg-[#ffffff3d] overflow-hidden w-full min-w-[393px] min-h-[808px] flex flex-col"
      data-model-id="1814:1174"
    >
      <SearchFunctionalitySection />
      <MainContentSection />
      <div className="z-[1] w-[393px] h-[1518px] mt-6 flex-col items-start pt-0 pb-3 px-0 flex relative">
        <ContentWrapperSection />
        <ResultsContainerSection />
        <ResultsListSection />
        <SpecialistListSection />
        <SearchBarSection />
        <ResultsHeaderSection />
        <DoctorCardSection />
        <DoctorDetailsSection />
        <AppointmentInfoSection />
        <FilterOptionsSection />
        <PaginationSection />
        <NoResultsSection />
      </div>
    </div>
  );
};
