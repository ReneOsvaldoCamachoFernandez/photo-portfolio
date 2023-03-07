import { Tab } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "oceans",
    display: "Oceans",
  },
  {
    key: "forest",
    display: "Forest",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover bg-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between items-center h-[90px] px-5">
        <div>Photography Portfolio</div>

        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>
      <main className="grow">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex  items-center gap-20">
              {tabs.map((tab) => (
                <Tab className="p-2">
                  {({ selected }) => (
                    <span
                      className={selected ? "text-white" : "text-stone-600"}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="bg-stone-900 bg-opacity-75 p-2 sm:p-4 h-full max-w-[900px] w-full my-6">
              <Tab.Panel className="">All Photos</Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forest</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
      <footer className="flex justify-center items-center h-[60px]">
        <p>placeholder for footer</p>
      </footer>
    </div>
  );
}
