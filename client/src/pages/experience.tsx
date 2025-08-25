import { useQuery } from "@tanstack/react-query";
import ExperienceCard from "@/components/sections/experience-card";
import type { Experience } from "@shared/schema";

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "IOMICS Corporation",
    role: "Machine Learning Intern (Ongoing)",
    description: "Developing scalable data pipelines for transforming clinical observational datasets into structured, analysis-ready formats for various machine learning models. Focused on propositionalization, building Extract, Transform, Load (ETL) pipelines, preprocessing workflows, schema configuration, and data quality reporting to support downstream Artificial Intelligence (AI) and research applications.",
    imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb8AAABxCAMAAAByWF0wAAAArlBMVEX///9Ik88iHx9CkM76/P5+st09js2wz+lbnNPr9PoAAAChoKB/r9ofHBw3jMwLAwPIx8cvLS1PmNGpzOgXExPW5fNcoNUcGRmHuN/S4/L29vYmIyOZmJgTDw8rKCiAf3/q6urOzs7Y2NiKiYlOTEy/vr49OztpaGh3dXXw9vtHRUU/PT21tLRaWFhiYGCqqKiew+Tj4+O/1+1uqNjT5POUvOFwb2+RkJChxOTF2+4GBXRLAAAT8ElEQVR4nO1dC3OqvtNWodZLEbEoLYr3+9Fa7Wltv/8Xe3OB3EiAAP39z7zDM3NmPAjL7j7JZrOJaa1WoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKjw38A0U2/QRBkvLaJ5+RZlNa+Y4DxOaT8/vNwSnmu/fj/o4v02THYflPn5etDXllXs5/Ph4fsnrvrwO9mi4c/zi7ZJLJ4V1g0fPwvJfXh4eWzreuGjaTSbnypzD+8jo2noY/CZwGD7oQ5l1h+SWU7Gzwd8T7P+IlrcbkHh78qXf+eziEGzJVO8/dIqKBeK/tAj0BwZdQDjUf71rWWg7/Vh1D+VHvwwonvyE/gYKWaMeCGHFIsGeS1ijRvFvfw4KC4Xin7RiqGPhlIhQO5jr4BOvRd5fDSfmkRZaUPOghtVzPiQWiRtyOZzL79BDOKt47sU9iBeNdxgPoSvbf5IvnwvppOiKd2azC0f+cbAYYtRrXdjvjk8Rf1SYlHtuZBBjN5Pgt7PpdHXVEZ+CdqjyFpJtCusk9AzMEzW9fXmi4a2VMYDK8MYMc5sD6KrEj+8M02nGAZ87/4pSy50mkYAHRJr467+KR5qes/xV96EW3TCBZEh8MB0wCHxw0PMDyVYRNTmAj8Z0ctASyMkUf5G4lekaxbBID6+vfBi80RQUTWDSZ+HEUdx/oat4gZF4Pkrr1/Xc/JXF/kzH8rQKc5OrFk0v7OrG+JTEMFmX2r+DmV2Eo6/dpn0ldT/buUY2xPZeY3dIumjyXgdiCIMKkLN32OZXubGP7E9FUK+8S/W/8qZzQAIrUkcuqCjs+uLEO9HTAaq5i/GegFwceVQxkhDoJV/KvtfSfMkoI6Q2ErmSVz+n47HuGoG7eVK/p7L7H7c/O+Wfr8OdBI6Vf8rsUkJlYHPuBv1Upi2JAsx6CxExV+pKSJfHCg3fGrVX1T9T2hSmkU8/lmuVMHP3KS3pEBWVMjAnzCeFytScnU/rmUUkgvQG2il44r+R4oYWKf66ONJA6O6cnYt56+uUQeN5z+Z+DO57tccaBkk4pvzMfVh3WgVEQshmTBn4o/vf0PGVuCcn7ZWTbX988I9zwZ0OX/GU2bh0jCYzt+QC9svr7rLNAl4JeOx8VFkQSUPFP2PGeuNQdJSmgLmjUlfDbZEpuh/RtZBO56+ZuOPibpGPYdFCWDmJSW2imxQ9D8mRdCenWFwczTmuoo/6fpHHLLkJRN/rDole5k0Da1hvBzI+1+bZuiGXm5PwWRAxl96WcFfvZ4t8CtWRFL5GzLP5bVIBVIQzNnUi0De/2hEkC1LZAR1NTM7Y/kTKgRZesWQn4OTzpjKH11KUS/M50XEX9YYUibk/Y/4uIhKtNDJZieUv+aNm8pL15pEcMmL8U4Gw1T+nsqwSIF/gj+2/9Fc29CvLVOQJIid7TL8vfI5vXS9lceNrbwYI5OsB6XxR6doOarlaSDxM/dmgvyQ9j9mnaWIRgfi7QHNLil/vWHthw2H8g0PLISli9daZv7+khf1iu15k4FUlHLnCvkh7X8k9cgU09SgYZgaxvHHV57Suga/ncN4N+lcPo2/H6JJMYukeKRxpvzGkQJp/6MKFQs2JNw1aXLJ83fgOtQguQPyyQu8mUxS0vgjobz5Cyk+XdUXa/W/Dxl/JgkIvWIBnSTtTE2W549fk0tZSOIrYJCIrPyZZIgyfmGIYopVxsdzbvwMc1QVZPHzQHc4FNwgTTZHfaj4M/lCa9IAwicvKKXNzB+h/jdSRHZYNpq50eu1nrW1k/JHtteOivEnEyTwx2/cSkph+OQFZ0RZ+TvQhvQL/JnCjp78MEa6GZAsftJuE9/BpWcYSU8GSv74FMZQV2G4LUJhWSEzfy3yXKmVzxCPpa3/GfVvPQWl/BGvFLSWJow90uxj/Jm8BarxiV82Crf4ZOaPJFK/wl+p+9r0UiBZ/KT8FZ3rkuwkgb+MKQyXvEQbLvT501xey4in0jqgbhE8uf8VLRVm4u/AV7TlIwC3bGQ8hczo8/c7KwRDNrUqikGu/S/S/vef8McUR+qqDKPdiicvtX+Hv5pqUSUPCu8f/K/547c0SVMYvtJNhoh/hj/ppo68kP2USIV/of8JOzOb8Q7Iu4cms/8MfyX+/Ci2lSwRyf2vaP7ynSH/hOD2hkn2wkiTl1oO/gpbpIL5UuYQmL0DJvc/vZ+Cxo2ilXn1/A/i8NRMUp+rvDSZ4SEzf+ThX5k/SEwoBI1Fc2n/I2UTnZFUAlqYaCXzx5emxRRGqLwwj+nP3x9+bYXg8FkvrQyTvUokrZ89xd2eC+0M9bMQfHWFj3L8shH7XWb+aIv8xSXyx1GzLAYzTyGk6w+k2zSL1q/jrlTwJ1RhWC9ze1Hr3PbkzPVr8tKUJapiaD9+GL38oORnT7Ok67ck7dDJZGXCiSvf0/gTUhh2lZWLnrxGmfl7l7/0n8KQTiKzJx7S9VviywK7zyCI15j2pOLPVFVh+MoLX1HPvH5LV6RL331WHphtR5kTD2n/o9tSWoUUomVd2mtU/PEbfuk4xf9saPBX/kzq/gkqoZBFv4tXYuqoUP8j45bOTEQim6T9zAk7Sv74FIaU4bnkRSw/Z+aPrhD8wwGUSRyNrIlH2v7BIiuAnzQcyPYPip48cPt5w40OQvIiaJOZP9qLCw4Jvwu6cUWbP27/Li1IahXDVaLZH7Co+RPXGNA1VeUFIzN/zKEXQgj+p0CqcPr8cUU3uqMq/xYK5rQHdltLAn/8PgS0eMwvzseysuz80SXy/8Emv8x4z88f1/9MWrDKvSWOcb3BTLoS+BM3CH6+frL/l2xvzs4f8/uVfzeCFhn/+N//MWGLmbvpgCnIc107iT/hGByD/4GLJPXPzh+7xPFrReyioGS0Cs0f+KGomeOUziE7m+ux1YRE/vij0XgYkrmMBn9sJDZe/skktND8j+9/bW4y1vq8vQ7bmfF6++R5YGtWifwlncQh2xuqwd+QG0lb77fX7AbFIPXuoYBAiJ8X+qs9/foL3/9M/kgMoz5oZceAL8TzyiTzp95KKTVJgz/h8Cw9i0SM4vVJ86WAPOw2pv6ZeZuV6vwX7pdBxcBPQZL5E3+gSSH9bZYGf2WdB4ZF90QCzYcy129zrD8Ii/ZmaafdCPl6Cn+1d7kf5L9N0uGvlOMUCcTmVN4W3npd54egyvPPSjsqU/hZZhp/ptTNhrxsqcOf7OCn/BAW8ks93Eln34P6/MGSNBJ/cJfGn+IkW3lA0eKvXd6QEFsIfi2Tvlz7X2LnD5a0JU482CWVP9kBFaoGqcVf7bvUUzo57Us9mjL77C/x/N2Ch5djxMatVP5kKYzqh+V6/P3e+a3lnmAXS44SkMBfGebGi43p/MUPelRuJ9DjT3Lua378Hn96+6/pzqz4d8VVMWKJFN1TqPypkXh2pSJ5qSn4ix6T7BVUJLe5TOO0L/VsUZ01V5I4yU59LXouqTGQqEKGCnWSLKYwytkQmRMwIYdck/Xa8n6nwGtf4sH2mj+Rinq+9AC5W6EtjVL6SMRO+HEhX/1JupHwMYw/LFvoO5RFYPNFmFyWIzYmOBXhyRqKVbFbPX9gUPxxI+LzhDDBRtBm0npdqD1ndNh7Y38hBUsuq07CV2PNkgZAo6n4m0NqoDcbqnX29lM91597MoyBSpMhKvQl/8708BH2fKOePJqjP3Ig/BWlzx6ySDG8fuf+i1wMYn81ppTqjmG09E8AMj8HvZ76d/Pm7WXU6+kepWCMPtXbFH6AwHrKDxHM20e91+zVH1KO6jQ/wW2jv7FrvZGye7e/oigi6NXjQe7vRyGRSOrHe57dxWb7J/E0WrM9/HnUwm04TDywt/16Sz/r5DAcPg6HqdHEHMa1N4e3RIvaQHQhyLRvF5QJnZZmbIUKFSpUqFChQoUKFSpU+H+G5aQ72Zx8/+L/rzWpkAf+8tg/ja+n7TXDraevs+Mcd5M+c7N/7a++jo6z3nUXc3yp3wVY4G8nXQ7oonlBny/zSMSJ/R98UX+yW4M3fRGRV16M2Nq6Ik7g4hzdGd1iwpdM5uxTC3iDyf6HxUQwfwOvXamB3e6SE7SgbpohN602V/pkqNZiGbmO0c6/kBs2yyVR8dLlsCTyL3tMwwLK8s/XvrM5f6Xyt9hbHdf1PM+1O9tJZPZl73QCeBVcDtZd5NdVx7Y7mKol+EjRaWANxuhq5y0yZd2xO05kv7nZO7YdirTXXWTPxublcDzUagH3GnDDH/huD3yYRrf4Z6jVgnnoeoRXIoLvggi7I9j/Bu/eoI8zrP86cmkXfnWnbkIOcQPbuSM3fRHRnY51XOGnFsC4zhHb32BuGJ+jRrblfYcdWut/2aF8YOUE8XdZ7XYT0pgUOE0DqwH5A/+CaeiH685FV8HlwLU8O4DtvrYKGg074q/RaFhugGGPsSsdqwFhz7CU+dlrWNtF5OdGYIEn0JuASBc5eNMAj1gBkSPwZwVABxdJ9eAnGzpmObWAWMLfm9todFgrvwJ4+3YZ8Qcf9JBi8JMr8reDz/drkYHwNidUo2uD/+D+2odu8rCbXA/fvg8ivVwLWLRFVxdjcN8a24/84YY3uMER96UjVCZyXRDy1x0zNECfAf4mp6/+hG2ZEsw7QJq3m5xO3ZmzCsPXwgGaWd75ftps7jvXmV2JeQx/1nY/C7Hi+AME+iJ/S2S/d16dNqfJl+fMsHshf9Z2RuQI8XMC0V0DFd0d+nxJ56/fQToEb1hWHz23BzdZDvp4T+WvEaznAn9+AHU4T06b7mw7C+mF/GG99tBy9+hL+LO76AZwFYgl/I13kcl79OprB7bjXfe0AbLu2Hs134f/kvmD1lpTfNMiCp5HaK11wmr6m6gJCPy5b4JszB/0QYAIZfibQy95TjgY+v1IJOTP/UpWsTaD7yUDXgp/c8g2aCuNKDDh96D2JpUu8ge7u/uGFKX8LeDzFm7Gy8hsyJ99IvIbHRl/YXe/AFEWDlOAP2sqhMUTeN7DrcZc6Ky/o9bqdjkmulDZIN5xBf6887xmYuDvEX/BBDjPCuBtDH8bqL61iYlE/O0iMQrF5fz5CKbIH1TSW23BLWPGR9n5c2cO7GpoBKP8ITcFeMwmYPhbpPF3gg7AaQLib8HbDPmzxt2aNvwtbHN2cL5vFpF20CLcg3iI49/YCdHAxPhY3+4YEjjh+INOdt/iItH4N96GcsZxgiEk/DWsTgS3wfK3sS34oolLIyi6nJk/+7KABNp7nxv/zshN9pFxE+IvWC36/c0Khkd3rY6fOxs+vkOX0fgXuc4Jb53CEct2z/c+lZ8Ji7dO4MHRteOdcRoN3d5wJa4U+Wt4ITocf7U7amsnlr+tR5oqB5y/EDmSO2py/si7UWZC+POB7y13WZtDJ7n0GQ3+urXNFD4MxnCGv+sOuckLOu55Feb0KH8JYBsCmZkVeMgLsfwFZZlw9Oismfwlstl1QhrOmAbbHp+Fbp4Cc7k/OmOUIbkoLPtnV+7sGH/jEDbPH8gAYQ/ciPyJM69ayB+Vo8Hfnwhjlr+ZDSM4CEooXrlk8qTFX61vQ/1XLH/ATas1cBPKoadM/okSSdcbO+dw/iDyBziCvpoeJ2E4QPxFJjcipcwFoKGBacgwaedx3XS/YKMLzpFe7i6e+Ijj3xqkpxhzdJHwV5uBD970QvmDFIRWcYD8eed+JEeud2L+gv0f8reBcWx83u12X2giQN6ox1+ta0FLLpOA8gcx33T3qG+iSIn99HYHmHSJ6rH4ebnACY1Hgzkc/8bdyOZ+jZO/s2iiqgX/BN7mHeehsY2A6h29Wcw/z7L8E/Hnv0GVt44V8QdbNEiTojvN6Mly808UOSw0LXUt1PajpzT5q3U98A7naPH8QZyoUUz+QiHJX3wHjsb76A5Z/kngn2BwdZLcIWBz3PgmLI+gF8/hJeh9y91foZf95Xkbpqex/PPqE6B303zLhOM9dGFoqr9C8WwXitxNw2CC80+TlyMiM38zlKRPQ8AY8CfqmJr84RwcTb9D/vpr7KY+aeaYv4sgTpZ/LmFGFKzC9Brx1xdNPh0XmAbY8rPzN1/Zrn2c3VdrNGfCys538D9BcF7d72vb9TpbVJhU5p/OFF1l+Kv5OxT1yfx9vocz1MAGIldvduDZDmIQ559EzlicXCNk5Q9P0i79EHCcCcJhQJs/8FJcjAjn73fX7Tj7+/0NBpIOLjBl5g/HdTtM6fn80wGzMHDrrINpOMNEtSPJFOTw3zqw9gMCDkx+OlGQ9rsd28WBCCddqDCysi2L8AcyLpI3ejjYguTPsjphK7seA3QLqZ91vUgkemNnhvnzWDm2ZNYC/QTEsvx5Fm2hgD/wLXzJ/Aw+2TMyiexDHcPnNuCzolXvoPSQP2BgNO33Z0h/C5v2FbnJRW6ay/TCWIw9y434g/5AHyfw/RYWfXQ518G+PN91PIaGffZFoznIqqwAZbjO+UQn0PPJeTv2wPXAc/6ERfA7aDWhDlfXYYFnnv6fqePYkYw5/J8zPZJI73ehSPgub/pnH9bPODFOQ97/QAe1GP7AdHH6h0jdgW9dKG0C1JuumYFlD76Z4lxu40FVpB74gs/3qYEX9nFgGuJvfl+D5BC6g3ET1MuLjX/Q6DP2wBZ4IIxHO/Bx2kCy11PW5Ckasub7teNhGrZn+SxYBbN/glPM7kkcUpenC7x+6c/DC1cYlTCVfp8HvrqAH8nz6Pb+gm1Ly80FvuuyiUTOpXJEReA3c/Jfn38N+taHCTj8wBrhU5HoPfJSMCP9yqngcyqZi9BNC9mTwksXMUWxMBzmeZPDcpm/uMhpqFChQoUKFSpUqFChQoU8+D/vWEG0PwUQkAAAAABJRU5ErkJggg==",
    githubUrl: null,
    dateRange: "Jul 2025 - Present"
  },
  {
    id: 2,
    company: "Commonwealth of Massachusetts (EEA)",
    role: "AI Software Engineer Intern",
    description: "Collaborating with the Executive Office of Energy and Environmental Affairs (EEA) to develop an AI chatbot for the agency's public website to reduce support staff query load by more than 70%. AI-powered RAG chatbot built on AWS will guide users through permit application processes and help them retrieve information tailored to their specific permit type.",
    imageUrl: "/commonwealth-ma-logo.png",
    githubUrl: null,
    dateRange: "Mar 2025 - August 2025"
  },
  {
    id: 3,
    company: "Embee Software",
    role: "AI & Data Analytics Intern",
    description: "Developed an AI agent that processes news content, generating summaries and answering user questions, reducing the time spent reviewing company news by 10x for a client. Built a Python application using Pandas to extract and convert employee work hour data from PDF logs into standardized CSV files, enhancing payroll department efficiency by 20x.",
    imageUrl: "/embee-logo.png",
    githubUrl: null,
    dateRange: "Jun - Aug 2024"
  },
  {
    id: 4,
    company: "UMass Robotics Club",
    role: "Software Developer",
    description: "Contributing to the Unity Telepresence project, focusing on inverse kinematics and motion planning for humanoid robots. Working on system design and modeling to enhance robot movement capabilities for the Mass Robotics competition. Implementing advanced robotics algorithms and real-time control systems.",
    imageUrl: "/images/umass-robotics.png",
    githubUrl: "https://github.com/UMass-Robotics-Club/Unity-Telepresence",
    dateRange: "Sep 2024 - Present"
  },
  {
    id: 5,
    company: "UMass Boxing Club",
    role: "Web Developer",
    description: "Designed and developed a modern, responsive website for the UMass Boxing Club using HTML, CSS, and JavaScript. Created an engaging platform that showcases club activities, training schedules, and member achievements. Implemented user-friendly navigation and mobile-responsive design.",
    imageUrl: "/images/boxing-club-logo.png",
    githubUrl: "https://github.com/Anshuman11o/Umass-Boxing-club",
    dateRange: "Jan 2024 - Present"
  },
  {
    id: 6,
    company: "Ferrum",
    role: "Software Development Intern",
    description: "Worked at Ferrum as an Intern for 2 weeks. Developed an app for the company using python. Learnt about the water purifier manufacturing process. Understood how a water purifier business is managed.",
    imageUrl: "/images/ferrum-logo.png",
    githubUrl: "https://github.com/Anshuman11o/Scrap-Calculator-Application",
    dateRange: "Jul - Jul 2022"
  }
];

export default function Experience() {
  const { data: experiences, isLoading } = useQuery({
    queryKey: ["/api/experiences"],
    initialData: EXPERIENCES
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Experience & Clubs</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}