import React, { Component } from "react";

class Footer extends Component {
    render() {
        if (this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.contact;
        }

        if (this.props.sharedBasicInfo) {
            var networks = this.props.sharedBasicInfo.social.map(function (network) {
                return (
                    <span key={network.name} className="m-4">
                        <a href={network.url} target="_blank" rel="noopener noreferrer">
                            <i className={network.class}></i>
                        </a>
                    </span>
                );
            });
        }

        var today = new Date();

        return (
            <footer>
                <div className="col-md-12">
                    <h1 className="section-title" style={{ color: "white", paddingBottom: 0, paddingTop: "2%" }}>
                        <span className="text-white" style={{ textAlign: "center" }}>
                            {sectionName}
                        </span>
                    </h1>

                    <div className="social-links">{networks}</div>

                    <div className="copyright py-4 text-center">
                        <div className="container">
                            <small>
                                Copyright &copy; {today?.getFullYear()}{" "}
                                {this.props.sharedBasicInfo ? this.props.sharedBasicInfo.name : "???"}
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
