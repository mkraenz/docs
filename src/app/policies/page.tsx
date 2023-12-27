import { Metadata } from "next";
import Link from "next/link";
import { DocsHeader } from "../../components/DocsHeader";
import { getAllPolicies } from "../../lib/policies";
import { DocsContainer } from "@/components/DocsContainer";
import { Prose } from "@/components/Prose";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Policies",
};

export default async function Page() {
  const policies = await getAllPolicies();

  return (
    <DocsContainer className="w-full flex-col px-1 pb-[60px] md:px-8">
      <DocsHeader title="Policies" />
      <Prose>
        <p>
          Zuplo includes policies for any solution you need for securing and
          sharing your API. See the{" "}
          <Link
            href="/policies"
            className="text-pink underline transition-colors hover:text-pink-hover"
          >
            policy introduction
          </Link>{" "}
          to learn about using policies.
        </p>
        <p>
          In addition to the built-in policies, Zuplo is{" "}
          <Link
            href="/policies/custom-code-inbound"
            className="text-pink underline transition-colors hover:text-pink-hover"
          >
            fully programmable
          </Link>{" "}
          so developers can simply write code to customize any aspect of Zuplo.
        </p>
      </Prose>
      <div>
        <Link
          href="/articles/policies"
          className="btn btn-large btn-secondary-light mt-6 inline-block w-full no-underline sm:w-auto"
        >
          Check out details
        </Link>
      </div>

      <div
        role="list"
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-testid="policies-grid"
      >
        {policies.map((item) => (
          <Card
            key={item.meta.id}
            name={item.meta.name}
            href={item.meta.href}
            icon={item.meta.icon}
            testID="policy-card"
          />
        ))}
      </div>
    </DocsContainer>
  );
}