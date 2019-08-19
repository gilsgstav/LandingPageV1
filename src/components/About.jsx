import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "office-ui-fabric-react/lib/Icons";
import * as styles from "../style/style.css";
import * as styles1 from "../style/bootstrap.min.css";
import * as styles2 from "../style/materialdesignicons.min.css";
import * as styles3 from "../style/pe-icon-7.css";
import { BackgroundWrapper, Wrapper, Title } from "./shared-styled-components";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServiceList: [
        {
          icon: "mdi mdi-database",
          title: "Terms of Use",
          content:
            "The use of this website, the application, products, and services is allowed only under the condition of user's consent to the terms"
        },
        {
          icon: "mdi mdi-palette",
          title: "Privacy",
          content:
            "The application and serives do not save any personal information of the user nor any data the user is using. THe application communicates directly from th ebrowser to Office 365 via Microsoft Azure services. no data is passed through the servers of the application."
        },
        {
          icon: "Home",
          title: "Copyrights ",
          content:
            "All rights reserved to Noteletts inc. and the developer of this web site and on demand application and products. Office 365, Azure, Excel, Onedrive copyrights belong to the prospective owner. Neither notelettes nor the developer of this application have any affiliation with Microsoft or the respective products."
        }
      ]
    };
  }

  render() {
    return (
      <>
        <div className="section">
          <Container className="container">
            <BackgroundWrapper>
              <Row>
                <Col lg="12">
                  <div className="title-heading mb-5">
                    <br />
                    <h3 className="text-dark mb-2 font-weight-bold">
                      About Notelettes on-Demand Applications Terms of Use.
                    </h3>
                  </div>
                </Col>
              </Row>
            </BackgroundWrapper>

            <Row>
              <Col lg="12">
                <div className="title-heading mb-5">
                  <h5 className="font-weight-light mb-3">
                    <br />
                    <br />

                    <span className="text-dark">
                      Terms of use Application and Acceptance of Terms The
                      following terms and conditions of use (these “Terms of
                      Use”) are terms of a legal agreement between you and
                      Notelettes Inc. ("Notelettes") and govern the terms and
                      conditions of your use of and access to Notelettes’s
                      websites , on Demand applications and online information.
                      By accessing, browsing and/or using this site and
                      associated websites, the on-demand applications, online
                      properties and links (collectively, the "Site"), you
                      acknowledge that you have read, understood and agreed to
                      be bound by these Terms of Use and to comply with all
                      applicable laws and regulations,. If you do not agree to
                      these Terms of Use, do not use the Site. The Site is
                      controlled and operated by Notelettes from its offices
                      within the Canada. Notelettes makes no representation that
                      materials in the Site are appropriate or available for use
                      in other locations, and access to them from territories
                      where their contents are illegal is prohibited. Those who
                      choose to access the Site from other locations do so on
                      their own initiative and are responsible for compliance
                      with applicable local laws. Terms of Purchase and Sale
                      These Terms of Use govern your access to and use of the
                      Site. Additional terms and conditions may apply to your
                      purchase and/or use of Notelettes products or services and
                      to certain provisions or pages of the Site as noted
                      therein. For any software that you download or use from
                      the Site, if additional terms and conditions do not
                      accompany the software that you download or use, then the
                      terms and conditions set forth in the applicable
                      agreement. You acknowledge and agree that your rights and
                      responsibilities will be governed by such other terms and
                      conditions. License and Use Restrictions Except as
                      otherwise provided on the Site, all rights, title and
                      interest (including all copyrights, trademarks and other
                      intellectual property rights) in this Site belong to
                      Notelettes or another party the created that part. Except
                      as expressly provided above, nothing on the Site shall be
                      construed as conferring any license or right under
                      copyright, trademark or other intellectual property
                      rights. Subject to these Terms of Use, Notelettes grants
                      to you a limited, nonexclusive right to access and make
                      personal use of the Site and the materials and information
                      contained on the Site. Except as stated herein, none of
                      the material or information on the Site may be modified,
                      altered, copied, reproduced, distributed, republished,
                      downloaded, displayed, posted or transmitted in any form
                      or by any means, including, but not limited to,
                      electronic, mechanical, photocopying, recording, or
                      otherwise, without the prior written permission of
                      Notelettes or the copyright owner. You may not use the
                      Site or any of the material or information contained on
                      the Site for any unlawful purpose or any purpose
                      prohibited by these Terms of Use, nor may you use the Site
                      to solicit any illegal activity or any activity that may
                      infringe upon the rights of others. You also may not,
                      without Notelettes's permission, "mirror" any material
                      contained on the Site on any other server. Any
                      unauthorized use of any material contained on the Site may
                      violate copyright laws, trademark laws, the laws of
                      privacy and publicity, and communications regulations and
                      statutes. Copyright Information The materials and
                      information contained on the Site, including, but not
                      limited to, the text, graphics, photographs, artwork,
                      icons, images, logos, audio, video, downloads, data and
                      compilations, online on-semand applications, belong to
                      Notelettes or the original creator and is protected by
                      applicable law, including, but not limited to, United
                      States and international copyright law and regulations.
                      Disclaimers The Site and all information and material
                      contained on the Site or made available through the Site
                      are provided on an “as is” and “as available” basis. Any
                      software made available on the Site is warranted, if at
                      all, only according to the additional terms and conditions
                      that accompany the software. Notelettes makes no other
                      representations or warranties of any kind whatsoever and
                      disclaims all other warranties and representations,
                      express or implied, including, but not limited to,
                      warranties of merchantability, fitness for a particular
                      use or purpose, accuracy, noninfringement or operation.
                      NOTELETTES does not guarantee the Site and the material
                      and information contained on the Site will be without
                      error or defect. You agree that you take full
                      responsibility for your use of the Site. Limitation of
                      Liability TO THE FULLEST EXTENT PERMITTED BY APPLICABLE
                      LAW, UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED
                      TO, NEGLIGENCE, SHALL NOTELETTES BE LIABLE FOR ANY DIRECT,
                      INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES,
                      INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA OR PROFIT,
                      ARISING OUT OF THE USE, OR THE INABILITY TO USE, THE
                      MATERIALS ON THE SITE, EVEN IF NOTELETTES HAS BEEN ADVISED
                      OF THE POSSIBILITY OF SUCH DAMAGES. IF YOUR USE OF
                      MATERIALS FROM THE SITE RESULTS IN THE NEED FOR SERVICING,
                      REPAIR OR CORRECTION OF EQUIPMENT OR DATA, YOU ASSUME ANY
                      AND ALL COSTS THEREOF. SOME STATES DO NOT ALLOW THE
                      EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL
                      DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT
                      APPLY TO YOU AND THEREFORE DO NOT USE THE SITE AND ITS
                      SERVICES INCLUDING THE ONLINE ON DEMAND APPLICATIONS.
                      Indemnification You agree to indemnify, defend, and hold
                      harmless Notelettes employees subcontractors , its
                      affiliates and owners from and against any and all claims
                      and expenses, including reasonable attorneys’ fees,
                      brought by a third party arising out of or related in any
                      way to your use of the Site, violation of these Terms of
                      Use, violation of any law or regulation, or violation of
                      any proprietary or privacy right. Privacy You acknowledge
                      and agree that you are responsible at all times for
                      maintaining the confidentiality and protection of your
                      account and password information if such information is
                      applicable to your use of the Site. You are also
                      responsible for adequately restricting the use and access
                      to your computer, smartphone, or other device used to
                      access the Site and all activity that occurs under your
                      account due to your failure to protect such information.
                      Our Transmissions Any material, information or idea you
                      transmit to or post on the Site by any means will be
                      treated as nonconfidential and nonproprietary, and may be
                      disseminated or used by Notelettes or its affiliates for
                      any purpose whatsoever, including, but not limited to,
                      developing, manufacturing and marketing products.
                      NOTELETTES may monitor, record or otherwise capture and
                      maintain a record of your site session for quality control
                      or other purposes. Notwithstanding the foregoing, all
                      personal data provided to or its affiliates will be
                      handled in accordance with Notelettes's Privacy Policy.
                      You are prohibited from posting or transmitting to or from
                      the Site any unlawful, threatening, libelous, defamatory,
                      obscene, scandalous, inflammatory, pornographic, or
                      profane material, or any other material that could give
                      rise to any civil or criminal liability under the law.
                      Hyperlink Disclaimers As a convenience to you, the Site
                      may provide links to other websites operated by other
                      entities (collectively, the “Linked Sites”). If you use
                      any Linked Site, you will leave the Site. If you decide to
                      visit any Linked Site, you do so at your own risk. Linked
                      Sites, regardless of the linking form (e.g., hotlinks,
                      hypertext links, IMG links) are not maintained, controlled
                      or otherwise governed by Notelettes. The content,
                      accuracy, opinions expressed and other links provided by
                      Linked Sites are not investigated, verified, monitored or
                      endorsed by Notelettes. Notelettes does not endorse or
                      make any representation regarding or warrant any
                      information, goods and/or services appearing or offered on
                      any Linked Site. Links do not imply that NOTELETTES or the
                      Site sponsors, endorses, is affiliated or associated with,
                      or is legally authorized to use any trademark, trade name,
                      logo or copyright symbol displayed in or accessible
                      through the Linked Sites, or that any Linked Site is
                      authorized to use any trademark, trade name, logo or
                      copyright symbol of NOTELETTES or any of its affiliates or
                      subsidiaries. Notelettes is neither responsible for nor
                      will it be liable under any theory based upon any Linked
                      Site, any information or content found on any Linked Site,
                      or any site linked to or from any Linked Site. Governing
                      Law You agree that any claim relating to the Site and the
                      materials contained on the Site and related to your access
                      and use of the Site will be governed by the laws of the
                      province of British Columbia of Canada without regard to
                      conflicts of laws principles. You agree to submit to the
                      personal and exclusive jurisdiction of the courts located
                      within the province of British Columbia of Canada. Term of
                      Use Revisions Notelettes may at any time revise these
                      Terms of Use by updating this posting. By using the Site,
                      you agree to be bound by any such revisions and should,
                      therefore, periodically visit this page to determine the
                      then current Terms of Use to which you are bound. This
                      page was last updated on 01/ August/ 2019
                    </span>
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
export default About;
