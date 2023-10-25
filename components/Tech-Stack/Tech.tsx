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
                  src={"/html.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/css.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/javascript.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/typescript.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/jquery.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/astro.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/react.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/redux.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/next.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/vite.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/gatsby.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/kotlin.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/graphql.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/tailwind.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/sass.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/three.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />

                <Image
                  src={"/angular.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/vue.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/flutter.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
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
                  src={"/node.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/express.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/nest.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/javascript.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/typescript.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/python.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/flask.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/django.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/rust.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/solidity.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/bitcoin.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/ethereum.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
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
                  src={"/mongo.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/maria.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/postgres.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/oracle.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/dynamodb.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/cockroach.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/redis.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/elasticsearch.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/cassandra.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
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
                  src={"/strapi.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/sanity.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/wordpress.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/drupal.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/joomla.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
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
                  src={"/aws.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/gcp.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/azure.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/digitalocean.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/salesforce.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/vercel.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/netlify.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
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
                  src={"/docker.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/ansible.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/jenkins.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/linux.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/kubernetes.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/maven.svg"}
                  width={1000}
                  height={1000}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/gradle.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/chef.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/terraform.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
                  src={"/selenium.svg"}
                  width={100}
                  height={100}
                  className="h-16 w-16"
                  alt=""
                />
                <Image
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
