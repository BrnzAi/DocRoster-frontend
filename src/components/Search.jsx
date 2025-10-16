import React from "react";
import { AppointmentSection } from "./AppointmentSection";
import { ContentWrapperSection } from "./ContentWrapperSection";
import { DoctorCardSection } from "./DoctorCardSection";
import { DoctorDetailsSection } from "./DoctorDetailsSection";
import { FilterOptionsSection } from "./FilterOptionsSection";
import { MainContentSection } from "./MainContentSection";
import { NotificationSection } from "./NotificationSection";
import { PaginationSection } from "./PaginationSection";
import { ProfileSection } from "./ProfileSection";
import { ResultsSection } from "./ResultsSection";
import { SearchBarSection } from "./SearchBarSection";
import { SearchResultsWrapperSection } from "./SearchResultsWrapperSection";
import { SearchSection } from "./SearchSection";
import { SpecialistListSection } from "./SpecialistListSection";

export const SearchScreen = () => {
  return (
    <div className="bg-[#ffffff3d] overflow-hidden w-full min-w-[393px] min-h-[808px] flex flex-col">
      <SearchSection />
      <MainContentSection />
      <div className="z-[1] w-[393px] h-[1518px] mt-6 flex-col items-start pt-0 pb-3 px-0 flex relative">
        <ContentWrapperSection />
        <SearchResultsWrapperSection />
        <ResultsSection />
        <SpecialistListSection />
        <SearchBarSection />
        <ProfileSection />
        <DoctorCardSection />
        <DoctorDetailsSection />
        <AppointmentSection />
        <FilterOptionsSection />
        <PaginationSection />
        <NotificationSection />
      </div>
    </div>
  );
};
