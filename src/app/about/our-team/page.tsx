import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const executiveTeam: TeamMember[] = [
  {
    name: "Aryan Sahai",
    role: "Founder & Chief Executive Officer",
    image: "/aryan.png",
  },
  { name: "Suhani", role: "Co-Executive Director", image: "/suhani.png" },
  { name: "Harshika", role: "Director of Outreach", image: "/user.png" },
];

const boardOfDirectors: TeamMember[] = [
  { name: "Nathan Dai", role: "Volunteer Coordinator", image: "/user.png" },
  { name: "Nitin", role: "Volunteer Coordinator", image: "/user.png" },
  { name: "Jackie Hao", role: "Volunteer Coordinator", image: "/user.png" },
];

const OurTeamPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Meet the people behind the success of our organization.
        </p>
      </div>

      {/* Executive Team */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Executive Team
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {executiveTeam.map((member) => (
            <div
              key={member.name}
              className="rounded-md bg-card p-6 text-center shadow-sm"
            >
              <div className="mb-4 mx-auto h-32 w-32 overflow-hidden rounded-full border border-border">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* Board of Directors */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-center text-3xl font-semibold">
          Board of Directors
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {boardOfDirectors.map((member) => (
            <div
              key={member.name}
              className="rounded-md bg-card p-6 text-center shadow-sm"
            >
              <div className="mb-4 mx-auto h-32 w-32 overflow-hidden rounded-full border border-border">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;
