import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <h4>Hey there,</h4>
                <h1>I'm Rick Barros</h1>
                <h3>Full Stack Software Developer</h3>
                <br></br>
                <p>Actively seeking a Jr. Developer opportunity where I can utilize my
                    recent education and expertise in coding as well as my prior tech
                    experience and knowledge.
                </p>
                <br></br>
                <p>
                    <h4><a href="https://www.dropbox.com/home/Resume?select=Ricardo+Barros+Resume.pdf&preview=Rick+Barros+Resume.pdf"
                        target="blank">Download
                        CV</a></h4>
                    <h4><a href="https://www.dropbox.com/s/vcf7q1gli24pxct/Ricardo_Barros_Letter_1.pdf?dl=0"
                        target="blank">Download Cover Letter</a></h4>
                </p>
                <br></br>
                <h2>Professional Experience</h2>
                <h3>Trinoor, LLC.</h3>
                <h4>Marietta, GA / May 2021 - Oct 2022</h4>
                <p>Performed software upgrades to proprietary software utilized by power companies for their systems
                    control by enabling their customizations in COBOL and transitioning them via Groovy language and web services.
                    Assisted DevOps in the security scanning of new software releases of Trinoor mobile warehousing control solution
                    to identify possible vulnerabilities by leveraging the power of Micro Focus Fortify WebInspect and Fortify on Demand software.
                    Using Apache JMeter software, performed load and performance testing of database servers when new release versions were deployed.</p>
                <br></br>
                <h3>Professional Interpretation Services</h3>
                <h4>Woodstock, GA / Oct 2018 - May 2021</h4>
                <p>Work as an independent Spanish-English contractor/interpreter for Workers Comp, School IEP's,
                    Workers Compensation depositions, as well as Immigration and Citizenship interviews.</p>
                <br></br>
                <h3>Apogee Telecommunications Inc.</h3>
                <h4>Norcross, GA / Aug 2015 - Sep 2018</h4>
                <p>Worked with shipping and receiving satellite equipment for installations in colleges and
                    universities. Maintained accurate records in the inventory system. Coordinated with various
                    Freight companies the pickup, shipping and delivery of the palletized equipment.</p>
                <br></br>
                <h3>AT&T Telecommunications Inc.</h3>
                <h4>Atlanta, GA / Apr 2000 - Aug 2010</h4>
                <p>Performed turn-up, provisioning and maintenance of wireless trunks and cell tower circuits.
                    Tested, located, and repaired equipment problems remotely via laptop.</p>
            </div>
        )
    }
}

export default About;
