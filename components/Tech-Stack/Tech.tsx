"use client";
import React, { useState } from "react";
import Image from "next/image";

const TechStacks = () => {
  const [currentStack, setCurrentStack] = useState("Frontend");

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
    // setCurrentStack(stack);
    switch (event.target.value) {
      case "Frontend":
        setCurrentStack("Frontend");
        break;
      case "Backend":
        setCurrentStack("Backend");
        break;
      case "Database":
        setCurrentStack("Database");
        break;
      case "CMS":
        setCurrentStack("CMS");
        break;
      case "Cloud":
        setCurrentStack("Cloud");
        break;
      case "DevOps":
        setCurrentStack("DevOps");
        break;
      default:
        setCurrentStack("Frontend");
        break;
    }
  };

  const handleStackClick = (stack: any) => {
    setCurrentStack(stack);
  };
  return (
    <div className="  my-10">
      <div className="flex justify-center items-center">
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="md:hidden flex rounded-md bg-slate-900 outline-none p-2 drop-shadow-md"
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="CMS">CMS</option>
          <option value="Cloud">Cloud</option>
          <option value="DevOps">DevOps</option>
        </select>
        <ul className="space-x-20 hidden md:flex">
          <li>
            <button
              onClick={() => handleStackClick("Frontend")}
              className={
                currentStack === "Frontend"
                  ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d] bg-clip-text text-transparent"
                  : ""
              }
            >
              Frontend
              <div
                className={`rounded-md w-5 h-1 my-1 mx-auto ${
                  currentStack === "Frontend"
                    ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d]"
                    : ""
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleStackClick("Backend")}
              className={
                currentStack === "Backend"
                  ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d] bg-clip-text text-transparent"
                  : ""
              }
            >
              Backend
              <div
                className={`rounded-md w-5 h-1 my-1 mx-auto ${
                  currentStack === "Backend"
                    ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d]"
                    : ""
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleStackClick("Database")}
              className={
                currentStack === "Database"
                  ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d] bg-clip-text text-transparent"
                  : ""
              }
            >
              Database
              <div
                className={`rounded-md w-5 h-1 my-1 mx-auto ${
                  currentStack === "Database"
                    ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d]"
                    : ""
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleStackClick("CMS")}
              className={
                currentStack === "CMS"
                  ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d] bg-clip-text text-transparent"
                  : ""
              }
            >
              CMS
              <div
                className={`rounded-md w-5 h-1 my-1 mx-auto ${
                  currentStack === "CMS"
                    ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d]"
                    : ""
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleStackClick("Cloud")}
              className={
                currentStack === "Cloud"
                  ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d] bg-clip-text text-transparent"
                  : ""
              }
            >
              Cloud
              <div
                className={`rounded-md w-5 h-1 my-1 mx-auto ${
                  currentStack === "Cloud"
                    ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d]"
                    : ""
                }`}
              />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleStackClick("DevOps")}
              className={
                currentStack === "DevOps"
                  ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d] bg-clip-text text-transparent"
                  : ""
              }
            >
              DevOps
              <div
                className={`rounded-md w-5 h-1 my-1 mx-auto ${
                  currentStack === "DevOps"
                    ? "bg-gradient-to-tr from-[#b059d8] to-[#fa617d]"
                    : ""
                }`}
              />
            </button>
          </li>
        </ul>
      </div>
      <div>
        {currentStack && (
          <div className="flex justify-center items-center">
            {currentStack === "Frontend" && (
              <div className="h-fit grid md:grid-cols-4 grid-cols-3 gap-10 place-items-center justify-center items-center w-[70%] my-10">
                <Image
                  loading="lazy"
                  src={"/html.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/css.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/javascript.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/typescript.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/jquery.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/astro.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/react.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/redux.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/next.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/vite.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/gatsby.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/kotlin.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/graphql.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/tailwind.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/sass.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/three.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />

                <Image
                  loading="lazy"
                  src={"/angular.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/vue.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/flutter.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/android.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
              </div>
            )}
            {currentStack === "Backend" && (
              <div className="h-fit grid md:grid-cols-4 grid-cols-3 gap-10 place-items-center  w-[70%] my-10">
                <Image
                  loading="lazy"
                  src={"/node.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/express.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/nest.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/javascript.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/typescript.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/python.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/flask.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/django.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/rust.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/solidity.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/bitcoin.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/ethereum.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/laravel.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
              </div>
            )}
            {currentStack === "Database" && (
              <div className="h-fit grid md:grid-cols-4 grid-cols-3 gap-10 place-items-center justify-center items-center w-[70%] my-10">
                <Image
                  loading="lazy"
                  src={"/mongo.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/maria.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/postgres.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/oracle.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/dynamodb.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/cockroach.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/redis.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/elasticsearch.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/cassandra.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/sqlite.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
              </div>
            )}
            {currentStack === "CMS" && (
              <div className="h-fit grid md:grid-cols-4 grid-cols-3 gap-10 place-items-center justify-center items-center w-[70%] my-10">
                <Image
                  loading="lazy"
                  src={"/strapi.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/sanity.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/wordpress.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/drupal.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/joomla.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/squarespace.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
              </div>
            )}
            {currentStack === "Cloud" && (
              <div className="h-fit grid md:grid-cols-4 grid-cols-3 gap-10 place-items-center justify-center items-center w-[70%] my-10">
                <Image
                  loading="lazy"
                  src={"/aws.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/gcp.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/azure.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/digitalocean.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/salesforce.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/vercel.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/netlify.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/ibm.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
              </div>
            )}
            {currentStack === "DevOps" && (
              <div className="h-fit grid md:grid-cols-4 grid-cols-3 gap-10 place-items-center justify-center items-center w-[70%] my-10">
                <Image
                  loading="lazy"
                  src={"/docker.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/ansible.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/jenkins.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/linux.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/kubernetes.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/maven.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/gradle.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/chef.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/terraform.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/selenium.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  loading="lazy"
                  src={"/prometheus.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStacks;
