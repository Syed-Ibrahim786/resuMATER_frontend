import { Briefcase, Building2, Globe, GraduationCap, Rocket } from 'lucide-react';
import React from 'react'

const PlatformsUI = () => {
 const jobPlatforms = {
    general: [
      { name: "LinkedIn", url: "https://linkedin.com/jobs" },
      { name: "Indeed", url: "https://indeed.com" },
      { name: "Naukri", url: "https://naukri.com" },
      { name: "Glassdoor", url: "https://glassdoor.com" },
      { name: "Monster", url: "https://monster.com" },
      { name: "SimplyHired", url: "https://simplyhired.com" },
      { name: "Shine", url: "https://shine.com" },
      { name: "TimesJobs", url: "https://timesjobs.com" }
    ],
    company: [
      { name: "Google Careers", url: "https://careers.google.com" },
      { name: "Amazon Jobs", url: "https://amazon.jobs" },
      { name: "Microsoft Careers", url: "https://careers.microsoft.com" },
      { name: "Apple Jobs", url: "https://apple.com/careers" },
      { name: "Meta Careers", url: "https://metacareers.com" },
      { name: "Netflix Jobs", url: "https://jobs.netflix.com" },
      { name: "Tesla Careers", url: "https://tesla.com/careers" },
      { name: "Stripe Jobs", url: "https://stripe.com/jobs" },
      { name: "TCS Careers", url: "https://ibegin.tcs.com" },
      { name: "Infosys Careers", url: "https://infosys.com/careers" },
      { name: "Wipro Careers", url: "https://careers.wipro.com" },
      { name: "Cognizant Careers", url: "https://careers.cognizant.com" },
      { name: "Accenture Careers", url: "https://accenture.com/in-en/careers" },
      { name: "HCL Careers", url: "https://hcltech.com/careers" },
      { name: "Tech Mahindra", url: "https://techmahindra.com/careers" },
      { name: "Capgemini Careers", url: "https://capgemini.com/careers" },
      { name: "LTI Mindtree", url: "https://ltimindtree.com/careers" },
      { name: "Zoho Careers", url: "https://zoho.com/careers" },
      { name: "Freshworks Careers", url: "https://freshworks.com/company/careers" },
      { name: "Flipkart Careers", url: "https://flipkartcareers.com" },
      { name: "Swiggy Careers", url: "https://careers.swiggy.com" },
      { name: "Zomato Careers", url: "https://zomato.com/careers" },
      { name: "Paytm Careers", url: "https://paytm.com/careers" },
      { name: "PhonePe Careers", url: "https://phonepe.com/careers" },
      { name: "CRED Careers", url: "https://cred.club/careers" },
      { name: "Razorpay Careers", url: "https://razorpay.com/jobs" },
      { name: "Ola Careers", url: "https://olaelectric.com/careers" },
      { name: "Myntra Careers", url: "https://myntra.com/careers" },
      { name: "IBM India", url: "https://ibm.com/in-en/employment" },
      { name: "Oracle Careers", url: "https://oracle.com/careers" },
      { name: "SAP Careers", url: "https://sap.com/careers" },
      { name: "Adobe Careers", url: "https://adobe.com/careers" },
      { name: "Cisco Careers", url: "https://cisco.com/careers" },
      { name: "VMware Careers", url: "https://careers.vmware.com" },
      { name: "Salesforce Careers", url: "https://salesforce.com/company/careers" }
    ],
    remote: [
      { name: "RemoteOK", url: "https://remoteok.com" },
      { name: "We Work Remotely", url: "https://weworkremotely.com" },
      { name: "Remote.co", url: "https://remote.co" },
      { name: "FlexJobs", url: "https://flexjobs.com" },
      { name: "Working Nomads", url: "https://workingnomads.com" },
      { name: "Remotive", url: "https://remotive.com" },
      { name: "JustRemote", url: "https://justremote.co" },
      { name: "Himalayas", url: "https://himalayas.app" }
    ],
    startup: [
      { name: "Wellfound", url: "https://wellfound.com" },
      { name: "Cutshort", url: "https://cutshort.io" },
      { name: "Y Combinator", url: "https://workatastartup.com" },
      { name: "Startup Jobs", url: "https://startup.jobs" },
      { name: "Hasjob", url: "https://hasjob.co" },
      { name: "ProductHunt Jobs", url: "https://producthunt.com/jobs" }
    ],
    fresher: [
      { name: "Internshala", url: "https://internshala.com" },
      { name: "AICTE Internship", url: "https://internship.aicte-india.org" },
      { name: "LetsIntern", url: "https://letsintern.com" },
      { name: "Twenty19", url: "https://twenty19.com" },
      { name: "Freshersworld", url: "https://freshersworld.com" },
      { name: "Collegedunia", url: "https://collegedunia.com/placements" },
      { name: "Unstop", url: "https://unstop.com" }
    ]
  };
const categoryIcons = {
    general: Briefcase,
    company: Building2,
    remote: Globe,
    startup: Rocket,
    fresher: GraduationCap
  };

  const categoryColors = {
    general: 'from-blue-500 to-cyan-500',
    company: 'from-purple-500 to-pink-500',
    remote: 'from-green-500 to-emerald-500',
    startup: 'from-orange-500 to-red-500',
    fresher: 'from-indigo-500 to-blue-500'
  };
console.log(Object.entries(jobPlatforms))
  return (
    <main className='px-4 pt-10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'>
        {/* <h1 className='text-white'>Alhamdhulillah</h1> */}
        <div className='relative text-center mb-12 animate-fade-in-up'>
        <div className='absolute inset-0 bg-gradient-hero pointer-events-none'></div>
        <h1 className='relative  text-3xl md:text-4xl font-bold text-gradient capitalize'>
          Job Platforms
        </h1>
        <p className='relative text-sm font-semibold text-gray-500'>
          Discover opportunities across top hiring platforms
        </p>
      </div>



        {
            Object.entries(jobPlatforms).map(([category, platforms]) => {
                const Icon = categoryIcons[category];
                const categoryBg = categoryColors[category];
                return (
                <div key={category} className='mb-10 animate-fade-in'>
                    <h2 className='flex items-center gap-4 mb-4 text-gray-300 text-xl md:text-2xl font-bold brightness-80  capitalize'><div className={`p-3 rounded-sm bg-gradient-to-br ${categoryBg} `}><Icon className=""/></div>{category}</h2>
                    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {
                            platforms.map((p, index) => (
                                <a 
                                key={index}
                                href={p.url}
                                target='_blank'
                                className='p-4 border-2 rounded-lg border-default bg-surface text-gray-300/85 font-bold hover:text-white transition-all duration-300  hover:bg-gradient-card hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
                                >{p.name}
                                </a>
                            ))
                        }
                    </section>
                </div>
            )})
        }
    </main>
  )
}

export default PlatformsUI
