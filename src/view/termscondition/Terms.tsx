import { Plannerfooter } from '../plannerfooter/Plannerfooter'
import { Plannerheader } from '../plannerhead/Plannerhead'
import '../termscondition/Terms.styles.css'

export function Termscontent(props: any) {
  return (
    <div style={{ borderBottom: '3px solid #575757' }}>
      <h4
        className="fw-bold pt-3 text-uppercase text-break"
        style={{ color: '#640281', letterSpacing: '1px' }}
      >
        {props.termsh4}
      </h4>
      <h6 className="fw-bold my-4">{props.termsh6}</h6>
      <p>{props.termsp1}</p>
      <p>{props.termsp2}</p>
      <p>{props.termsp3}</p>
      <p>{props.termsp4}</p>
      <p>{props.termsp5}</p>
      <p>{props.termsp6}</p>
      <p>{props.termsp7}</p>
      <p>{props.termsp8}</p>
      <p>{props.termsp9}</p>
      <p>{props.termsp10}</p>
      <p>{props.termsp11}</p>
      <p>{props.termsp12}</p>
      <p>{props.termsp13}</p>
      <p>{props.termsp14}</p>
      <p>{props.termsp15}</p>
      <p>{props.termsp16}</p>
      <p>{props.termsp17}</p>
      <p>{props.termsp18}</p>
      <p>{props.termsp19}</p>
      <p>{props.termsp20}</p>
      <p>{props.termsp21}</p>
      <p>{props.termsp22}</p>
      <p>{props.termsp23}</p>
      <p>{props.termsp24}</p>
      <p>{props.termsp25}</p>
    </div>
  )
}

export function Terms() {
  return (
    <div>
      <Plannerheader />
      <div className="col-12 terms ">
        <img
          src="https://media.istockphoto.com/id/1336169315/photo/t-c-web-banner-the-abbreviation-for-terms-and-conditions-built-from-letters-on-wooden-cubes.jpg?b=1&s=170667a&w=0&k=20&c=EI4OND5rQaC8LSCN3n_wJNFhY0c7efUdIr_-fmEcCFo="
          className="img-flui"
        />
      </div>

      <div className="row justify-content-center bg-light mx-0">
        <div className="col-md-7  py-5 ">
          <h2 className="text-dark" style={{ letterSpacing: '2px' }}>
            𝐓𝐄𝐑𝐌𝐒 𝐀𝐍𝐃 𝐂𝐎𝐍𝐃𝐈𝐓𝐈𝐎𝐍𝐒
          </h2>
          <Termscontent
            termsh4={`Event Management`}
            termsp1={`This Contract sets out the terms and conditions under which we will provide the Service to you.`}
            termsp2={`By “you” or “your” we mean the “Client” as defined below. `}
            termsp3={`By “us” and “we” we mean our management, being the trading name of “PLANNER ADDICT”`}
          />

          <Termscontent
            termsh4={`Meaning of Terms`}
            termsp1={`In this Contract, The following words shall have the following meanings:`}
            termsp2={`𝗕𝗼𝗼𝗸𝗶𝗻𝗴 – means the request and confirmation of the Service.`}
            termsp3={`𝗕𝗼𝗼𝗸𝗶𝗻𝗴 𝗖𝗼𝗻𝘁𝗿𝗮𝗰𝘁
            – means the Booking Contract signed by the parties which sets out specific details of
            the booking of Service by the Client`}
            termsp4={`𝗖𝗹𝗶𝗲𝗻𝘁
             - means any natural person, corporate or unincorporated body (whether or not having separate
            legal personality) contracting for the use of the Service.`}
            termsp5={`𝗖𝗼𝗺𝗺𝗲𝗻𝗰𝗲𝗺𝗲𝗻𝘁 𝗗𝗮𝘁𝗲
            – The Contract shall come into effect upon receipt by “Planner Addict” of a signed
            contract from the Client or on the first date on which “Planner Addict” provides The Service, whichever
            is the Earlier.`}
            termsp6={`𝗖𝗼𝗻𝗱𝗶𝘁𝗶𝗼𝗻𝘀- means these terms and conditions, as amended from time to time by “Planner Addict”.`}
            termsp7={`𝗖𝗼𝗻𝘁𝗿𝗮𝗰𝘁 – means these Conditions and the Booking Contract.`}
            termsp8={`𝗗𝗲𝗹𝗲𝗴𝗮𝘁𝗲- means any person including speakers, exhibitors or partners attending all or part of the Event
            for which this Service is being provided.`}
            termsp9={`𝗘𝘃𝗲𝗻𝘁- means the occasion for which the Service is required.`}
            termsp10={`𝗠𝗶𝗻𝗶𝗺𝘂𝗺 𝗚𝘂𝗮𝗿𝗮𝗻𝘁𝗲𝗲𝗱 𝗡𝘂𝗺𝗯𝗲𝗿
            means the number of delegates anticipated to register using the Service
            as specified by the Client in the Booking Contract.`}
            termsp11={`𝗣𝗿𝗶𝗰𝗲 means the price specified in the Booking Contract.`}
            termsp12={`𝗥𝗲𝘃𝗲𝗻𝘂𝗲 means the Revenue anticipated by “PLANNER ADDICT” First in respect of the Delegate fees.`}
            termsp13={`𝗦𝗲𝗿𝘃𝗶𝗰𝗲 means the services as provided by “PLANNER ADDICT” First as set out in the Booking Contract.`}
            termsp14={`1. In this Contract the following rules apply:`}
            termsp15={`a) A reference to a statute or statutory provision is a reference to such statute or provision as amended
            or re-enacted. A reference to a statute or statutory provision`}
            termsp16={`b) Any phrase introduced by the terms “including”, “include”, “in particular” or any similar expression
            shall be construed as illustrative and shall not limit the sense of the words preceding those terms;`}
            termsp17={`c) A reference to “writing” or “written” includes faxes and emails.`}
          />

          <Termscontent
            termsh4={`Booking`}
            termsp1={`2. The Booking constitutes an offer by the Client to purchase the Service in accordance with these
            Conditions. The Client shall ensure that the terms and specifications in the Booking are complete and
            accurate.`}
            termsp2={`3. For the avoidance of doubt, the Client’s standard terms and conditions (if any) attached to, enclosed
            with, or referred to in the Booking shall not govern the Contract and these Conditions shall prevail over
            any other conditions previously published by “Planner Addict” in respect of the Service and these
            Conditions apply to the Contract to the exclusion Of any other terms that the Client seeks to impose or
            incorporate or which are implied by trade, custom, practice or course of dealing.`}
            termsp3={`4. The Contract shall come into effect upon receipt by “Planner Addict” of a signed contract from the
            Client or on the first date on which “Planner Addict” provides the Service, Whichever is the earlier (the
            Commencement Date). Notwithstanding the foregoing, “PLANNER ADDICT” reserves the right to refuse
            to supply the Service until such time as it has received a signed contract from the Client.`}
          />

          <Termscontent
            termsh4={`Service`}
            termsp1={`5. “Planner Addict” shall use reasonable endeavours to supply the Service from the Commencement
            Date`}
            termsp2={`6. The Service shall be directed by the event manager or such other suitably qualified person appointed
            by “Planner Addict”`}
            termsp3={`7. “PLANNER ADDICT” reserves the right to make changes to the Service which are necessary to comply
            with any applicable laws or safety requirements. “Planner Addict” will notify The Client of any changes
            to the Service.`}
            termsp4={`8. “PLANNER ADDICT” will provide administrative assistance with the management of the Event budget
            and shall provide the client with profit and loss reports. However, Not with standing the foregoing, the
            Client will be solely responsible for the overall management of the budget associated with the Event and
            shall be solely responsible for any Loss incurred.`}
            termsp5={`9. If “PLANNER ADDICT” is required to provide a Website under this Contract, the Website will remain
            live for a period of six months after the date of the Event. The Client will be Solely responsible for the
            content of the Website and the Abstract uploaded by the Client and/or Delegates (the “Abstract”) and
            any postings on or use of the Website by the Client and or any third parties and/or Delegates, and shall
            indemnify the University in respect of any loss or claims resulting from the content of the Website
            and/or the Abstract `}
          />
          <Termscontent
            termsh4={`Delegate number`}
            termsp1={`10. The Client shall confirm the Minimum Guaranteed Number at the Commencement Date. If the
            number of Delegates is less than the Minimum Guaranteed Number then a cancellation charge will
            apply as set out in clause 27. If the final number of Delegates increases over those previously
            communicated to the event manager, the Client will be charged accordingly.`}
            termsp2={`11. The Minimum Guaranteed Number may be adjusted by the Client provided that such adjustment is
            communicated to and accepted by “PLANNER ADDICT” in writing. However, any reduction in numbers
            will remain subject to “PLANNER ADDICT” cancellation policy as set out in clauses 24 to 28, subject only
            to the provisions of clause 27. Any increase in Delegate numbers may result in an increase in the Price.`}
          />
          <Termscontent
            termsh4={`Client’s obligations`}
            termsp1={`12. The Client shall:`}
            termsp2={`a) co-operate with “PLANNER ADDICT” in all matters relating to the Service;`}
            termsp3={`b) provide, in a timely manner, such data and other information as “PLANNER ADDICT” may require for
            the provision of the Service, and ensure that it is accurate in all material aspects;`}
            termsp4={`c) provide content and materials for inclusion on the Website and in the Abstract as requested by
            “Planner Addict” and ensure that “PLANNER ADDICT” and the Client have the right to use all intellectual
            property rights associated with the relevant content and materials`}
            termsp5={`13. The Client shall not use the names, logos or any details of “PLANNER ADDICT” or the University of
            Edinburgh for any matter.`}
          />

          <Termscontent
            termsh4={`Charges`}
            termsp1={`14. In consideration of the provision of the Service, the Client hereby agrees to pay the Price to
            “PLANNER ADDICT” together with any VAT eligible in respect thereof at the prevailing`}
            termsp2={`15. “PLANNER ADDICT” has the right to adjust the Price in the case that any additional services are
            requested by the Client after the Commencement Date, including but not limited to An increase in
            Delegates`}
            termsp3={`16. Written notification of any Price changes will be made by “PLANNER ADDICT” to the Client as soon
            as possible.`}
          />

          <Termscontent
            termsh4={`Additional Charges and Payments to Third Parties`}
            termsp1={`17. The Price is a service and management charge and expressly excludes any postage charges and any
            other ancillary expenses reasonably and properly incurred by “PLANNER ADDICT” First in connection
            with the Service.`}
            termsp2={`18. “PLANNER ADDICT” shall obtain the Client’s written approval before incurring any expenses,
            material or services exceeding an amount specified by the Client and included in the Booking Contract.`}
            termsp3={`19. If “Planner Addict” requires to sub-contract the provision of any part of the Service, it shall issue a
            written confirmation to the Client for the Client’s approval and “PLANNER ADDICT” Shall have the right,
            acting as an agent of the Client, to bind the Client contractually to all approved sub-contractors. `}
            termsp4={`20. As “PLANNER ADDICT” is acting as an agent in relation to the provision of the Service, it will not be
            liable to any third party suppliers for payment.`}
            termsp5={`21. Any expenses incurred under clause 17 or 18 shall be invoiced by “PLANNER ADDICT”. `}
            termsp6={`22. Notwithstanding the terms of clause 21, “PLANNER ADDICT” can make payments to third party
            suppliers and/or sub-contractors on behalf of the Client. “Planner Addict” can, at its Sole discretion, set
            off the Revenue against any payments made by it to third parties. In the event that the Revenue actually
            received by “PLANNER ADDICT” does not exceed the Sums paid by it to third parties, “PLANNER
            ADDICT” shall invoice the client for any sums not covered in accordance with clause 21.`}
            termsp7={`23. If for any reason, the Event is cancelled or postponed, the Client shall be liable for all payments
            made or due to third parties under the terms of this Contract and shall Indemnify “Planner Addict” in
            relation to the same, provided that “PLANNER ADDICT” uses reasonable endeavors to mitigate any such
            costs.`}
          />

          <Termscontent
            termsh4={`Cancellation / reduction`}
            termsp1={`By “Planner Addict”:`}
            termsp2={`24. “PLANNER ADDICT” reserves the right to cancel the Service (or any part thereof) if:`}
            termsp3={`a) the Client breaches any of its duties or obligations under the Contract;`}
            termsp4={`b) in the opinion of “PLANNER ADDICT”, the Client has requested a significant change of the Contract or
            Service; including but not limited to a request to reduce the Minimum Guaranteed Numbers;`}
            termsp5={`c) an administrator is appointed to the Client or in the event of the liquidation or receivership of the
            Client;`}
            termsp6={`d) “PLANNER ADDICT” is not satisfied with the Client’s credit status;`}
            termsp7={`e) in the opinion of “PLANNER ADDICT”, the Event might prejudice the reputation of “PLANNER
            ADDICT”`}
            termsp8={`f) “PLANNER ADDICT”is requested to cancel the Event by order of any government or other public
            authority.`}
          />
          <Termscontent
            termsh4={`By the Client:`}
            termsp1={`25. The Booking will be considered ‘cancelled’ by “PLANNER ADDICT” when a Client, by written
            notification to the event manager, cancels or postpones the entire Booking.`}
            termsp2={`26. In the event of termination of the Contract for any reason, “PLANNER ADDICT” shall have the right
            to impose a cancellation charge which shall be calculated as detailed in clause 27 below.`}
            termsp3={`27. In the event of cancellation, “PLANNER ADDICT” shall have the right to impose a cancellation charge
            which shall be calculated as detailed below:`}
            termsp4={`a) if cancelled 70 days prior to the first day of the Event, the cancellation charge shall be 10% of the
            Price;`}
            termsp5={`b) if cancelled 55 days prior to the first day of the Event, the cancellation charge shall be 25% of the
            Price;`}
            termsp6={`c) if cancelled 40 days prior to the first day of the Event, the cancellation charge shall be 50% of the
            Price;`}
            termsp7={`d) if cancelled 25 days prior to the first day of the Event, the cancellation charge shall be 75% of the
            Price;`}
            termsp8={``}
          />

          <Termscontent
            termsh4={`Deposit`}
            termsp1={`29. A non-refundable deposit of 20% of the Price is payable upon the Commencement Date.`}
            termsp2={`30. Further deposits may be required depending on the number of Delegates and/or the value of any
            additional services the Client requests “Planner Addict” to book and/or`}
            termsp3={`Contract on their behalf.`}
          />

          <Termscontent
            termsh4={`Payment terms for the Service`}
            termsp1={`31. For all bookings by Clients who are part of the “PLANNER ADDICT”:`}
            termsp2={`a) the Client shall, within 14 days of the date of the relevant invoice or request for payment, pass for
            payment, in pounds sterling, all monies due under the Contract.`}
            termsp3={`b) the Client shall notify “PLANNER ADDICT” of any disputed amounts within 5 working days of the date
            of the invoice or request for payment and the Client shall pay the undisputed amount within 14 days of
            the date of the invoice. The disputed amount alone may be withheld until the dispute is resolved.`}
            termsp4={`c) all payments by the Client to “PLANNER ADDICT” shall be made without deduction or set off.`}
            termsp5={`32. For all other bookings:`}
            termsp6={`a) the Client shall make all payments due under the Contract in pounds sterling and within 14 days of
            the date of the relevant invoice or request for payment.`}
            termsp7={`b) if the Client fails to pay any amount due under the Contract on the due date, “PLANNER ADDICT”
            may charge interest at an annual rate of 3% above the base rate for the`}
            termsp8={`time being of Royal Bank of Scotland plc for the period from the due date up to and including the date of
            receipt.`}
            termsp9={`c) the Client shall notify “PLANNER ADDICT” of any disputed amounts within 5 working days of the date
            of the invoice or request for payment and the Client shall pay the`}
            termsp10={`undisputed amount within 14 days of the date of the invoice; the disputed amount alone may be
            withheld until the dispute is resolved.`}
            termsp11={`d) all payments by the Client to “PLANNER ADDICT” shall be made without deduction or set off.`}
          />

          <Termscontent
            termsh4={`Payment terms for Delegates`}
            termsp1={`33. Payment must be made in full by the Delegate for the Delegate’s registration to be confirmed. There
            are two payment options:`}
            termsp2={`34. Payment option one: on-line by card;`}
            termsp3={`a) delegates paying on-line using a card will receive confirmation of their transaction from the payment
            provider.`}
            termsp4={`b) following payment, an invoice will be issued by “PLANNER ADDICT” on behalf of the Client.`}
            termsp5={`c) if the Client is VAT registered, this will be a VAT invoice.`}
            termsp6={`35. Payment option two: via an invoice request;`}
            termsp7={`a) during the on-line registration process, the Delegate can request the payment option “request an
            invoice”.`}
            termsp8={`b) the Delegate will complete their company billing details, including the invoice contact, at this stage.`}
            termsp9={`c) an invoice will be issued by “PLANNER ADDICT” on behalf of the Client, and sent to the booker or
            booker/delegate`}
            termsp10={`d) if the Client is VAT registered, this will be a VAT invoice.`}
            termsp11={`e) a receipt will be issued on behalf of the Client by “PLANNER ADDICT” following payment.`}
            termsp12={`36. Within two weeks of the start date of any event, there will no longer be the option to pay by invoice.
            The registration must either be closed by this date or the delegates will be Only offered the option to
            pay online at the time of booking`}
            termsp13={`37. Any unpaid invoices will be chased by the administrator four times:`}
            termsp14={`a) for delegates who register more than 3 months before the start date of the event, there will be four
            chases that will be completed a month before the start of the event.`}
            termsp15={`b) for delegates who register less than 3 months before the start date of the vent, there will be four
            chases that will be completed before the date of the event.`}
            termsp16={`c) the first payment chase will be a generic e-mail, the second a personalised e-mail, the third a
            telephone call, and the fourth will be a final e-mail advising that their`}
            termsp17={`registration may be cancelled.`}
            termsp18={`d) the wording of the debt chasing e-mails will be approved by the Client`}
            termsp19={`e) this will be confirmed in all delegate terms and conditions. The Client cannot adjust the payment
            chasing dates.`}
            termsp20={`38. “PLANNER ADDICT” will inform the Client of any unpaid invoices and agree with the Client whether
            the provisional registration is to be cancelled.`}
            termsp21={`39. After the four debt chases the outstanding debt will be passed back to the Client`}
            termsp22={`40. If cancelled, “PLANNER ADDICT”, on behalf of the Client, will send an email to the Delegate to
            confirm the Delegate’s place has been cancelled`}
            termsp23={`41. The Client’s account will be closed (including disbursement of final monies) 30 days after the date of
            their event.`}
          />

          <Termscontent
            termsh4={`Delegate cancellation and refunds `}
            termsp1={`42. The Client is responsible for setting and agreeing communication by “PLANNER ADDICT” of the
            delegate terms and conditions specific to the Event.`}
            termsp2={`43. If a Delegate alters their booking or cancels any element of their booking, resulting in a full or part
            refund, “PLANNER ADDICT” will issue the refund by cheque on behalf of the Client.`}
            termsp3={`44. Individual registration cancellations or individual registration substitutions will be subject to an
            administration charge per cancellation or substitution as defined in the Booking Contract.`}
            termsp4={`45. The Client agrees to reimburse “PLANNER ADDICT” for the refund made to the delegates as per
            clause 43 and administration charge as per clause 44.`}
          />
          <Termscontent
            termsh4={`Financial`}
            termsp1={`46. “PLANNER ADDICT” will:`}
            termsp2={`a) provide a separate area within the UOEAL bank account.`}
            termsp3={`b) receive and deposit Revenue in connection with the Event.`}
            termsp4={`c) provide regular management reports as agreed with the Client.`}
            termsp5={`d) provide stage payments to the Client as required and agreed in the Client Payment Information.`}
            termsp6={`e) deliver the remaining funds to the Client within a period after the event end date, as defined in the
            Booking Contract.`}
          />

          <Termscontent
            termsh4={`Information/Data`}
            termsp1={`47. Information and data belonging to the Client and used by “PLANNER ADDICT” for delegate
            registration purposes will remain the sole property of the Client. Except with the express`}
            termsp2={`Written permission of the Client or if required by law or regulation, “PLANNER ADDICT” will not disclose
            or use this information for any purpose other than those associated with the Service.`}
            termsp3={`48. “PLANNER ADDICT” undertakes to maintain database management procedures in compliance with
            the Data Protection Act 1998 (the “DPA”).`}
            termsp4={`49. The Client warrants that it has notified with the Information Commissioner as a data controller (as
                defined in the DPA) if it is legally required to do so and shall ensure that it is Compliant with the terms of
                the DPA and has sufficient authority to pass any data to “Planner Addict”.`}
          />

          <Termscontent
            termsh4={`Intellectual Property Rights`}
            termsp1={`50. As between the Client and “PLANNER ADDICT”, all intellectual property rights and all other rights in
            and/or resulting from the provision of the Service shall be owned by “PLANNER ADDICT” First.
            “PLANNER ADDICT” licenses all such rights to the Client on a non-exclusive, worldwide basis to such
            extent as is necessary to enable the Client to make reasonable use of The Service. If this Contract is
            terminated, this licence will automatically terminate.`}
            termsp2={`51. Any intellectual property rights developed prior to or out with the scope of this Contract shall remain
            the property of the party that introduced the same and they will grant to the Other party, a non-exclusive, royalty free licence to use the same for the purpose of fulfilling their obligations under the
            Contract.`}
            termsp3={`52. If the Client provides any logos, trade marks, copyright or any materials (“Client IP”) to “PLANNER
            ADDICT” for the Website the Abstract or for the purpose of delivering the Service, “PLANNER ADDICT”
            shall have a licence to use the intellectual property rights in any such Client IP for the purpose of
            delivering the Service only.`}
            termsp4={`53. The Client warrants that it has sufficient rights in the Client IP to licence it to “PLANNER ADDICT”
            under this Contract and will indemnity “PLANNER ADDICT” against any and all loss Incurred as a result
            of the use of such Client IP.`}
          />

          <Termscontent
            termsh4={`Confidentiality`}
            termsp1={`54. The Client shall keep in strict confidence all technical or commercial know-how, specifications,
            inventions, processes or initiatives which are of a confidential nature and have`}
            termsp2={`Been disclosed to the Client by “PLANNER ADDICT”, its employees, agents, consultants or
            subcontractors and any other confidential information concerning “PLANNER ADDICT” Business or its
            products which the Client may obtain.`}
            termsp3={`55. The Client may disclose such information:`}
            termsp4={`a) to its employees, officers, representatives, advisers, agents or subcontractors who need to know such
            information for the purposes of carrying out the Client’s`}
            termsp5={`obligations under this Contract; and`}
            termsp6={`b) as may be required by law, court order or any governmental or regulatory authority.`}
            termsp7={`56. The Client shall ensure that its employees, officers, representatives, advisers, agents or
            subcontractors to whom it discloses such information comply with clauses 54 to 57.`}
            termsp8={`57. The Client shall not use any such information for any purpose other than to perform its obligations
            under this Contract.`}
          />

          <Termscontent
            termsh4={`Liability – please read carefully`}
            termsp1={`58. Subject to clause 60, the entire liability of “PLANNER ADDICT” in connection with the Contract
            whether for negligence, breach of contract, misrepresentation or otherwise, is limited`}
            termsp2={`To an amount equal to the Price.`}
            termsp3={`59. Subject to clause 60, the liability of “PLANNER ADDICT” in connection with the Contract whether for
            negligence, breach of contract, misrepresentation or otherwise, will not extend To any special, indirect or consequential damages or losses, or any loss of profits, loss of revenue, loss of
            data, loss of contracts or opportunity, whether direct or indirect, even`}
            termsp4={`If the Client has advised “PLANNER ADDICT” of the possibility of those losses, or if they were within
            “PLANNER ADDICT” contemplation.`}
            termsp5={`60. Nothing in these conditions shall operate to exclude or restrict either party’s liability for:`}
            termsp6={`a) death or personal injury resulting from negligence.`}
            termsp7={`b) fraud or deceit.`}
            termsp8={`61. The Client shall indemnify, keep indemnified and hold “PLANNER ADDICT” harmless from and
            against all claims, actions, damages, liabilities and costs (including professional fees)`}
            termsp9={`Which may be brought against or incurred or suffered by “PLANNER ADDICT”, its employees or agents
            in connection with the Service which arise as a result of or due to the actions, Omissions, or negligence
            of the Client, its employees or agents or others whom it is responsible, or any Delegate. `}
            termsp10={`62. “PLANNER ADDICT” will have no liability to the Client and/or the Delegate when they are not at
            “PLANNER ADDICT” premises, even if any such liability is incurred at a location which “PLANNER
            ADDICT” has organised an alternative venue for delivery of the Event and/or organised as part of the
            relevant social programme as part of the delivery of the Service as Specified in the Booking Contract.`}
            termsp11={`63. “PLANNER ADDICT” gives notice that all arrangements for transport and conveyance, or for any
            other services, are made by them as agents, upon the express condition that they Shall not be liable for
            any injury, damage, loss, accident, delay or irregularity howsoever caused which might occur due to the
            act, omission fault or negligence of any suppliers Or subcontractors engaged in carrying out contracted
            arrangements for the Client.`}
            termsp12={`64. The Client shall effect and maintain adequate insurance cover (including professional indemnity
            insurance and event and public liability insurance) to cover all liabilities under The Contract, with a
            reputable insurer approved by “PLANNER ADDICT” and shall, on “PLANNER ADDICT” request, produce
            both the insurance certificate giving details of cover and the Receipt for the current year’s premium in
            respect of each insurance.`}
          />

          <Termscontent
            termsh4={`General`}
            termsp1={`65. The Client shall comply with all applicable laws, statutes, regulations relating to anti-bribery and
            anti-corruption including but not limited to the Bribery Act 2010.`}
            termsp2={`66. ‘Force Majeure’ means any circumstance beyond the control of “PLANNER ADDICT” including, but
            not limited to acts of God, fire, explosion, adverse weather conditions, flood, Earthquake, failure of
            energy sources or transport network, terrorism, riot, civil commotion, war, hostilities, strikes, work stoppages, slow-downs, or other industrial disputes, Accidents, riots or civil disturbances, acts of
            government, lack of power, non-performance or delays by suppliers or materials shortages.`}
            termsp3={`67. “PLANNER ADDICT” shall not be liable to the other of loss or damages arising from prevention or
            delay in performance of this Contract where same is a result of Force Majeure. For the avoidance of
            doubt, nothing shall excuse the Client from any payment obligations under the Contract.`}
            termsp4={`68. If “PLANNER ADDICT” is prevented or hindered from hosting the event by a Force Majeure event,
            “PLANNER ADDICT” may, at its sole option and without being liable for any loss or Damage suffered by
            the Client or Delegates, relocate the event to another location or terminate the Contract forthwith by
            giving notice to that effect to the Client.`}
            termsp5={`69. The benefit of this Contract may not be assigned by the Client without the prior written consent of
            “PLANNER ADDICT”.`}
            termsp6={`70. This Contract and any document referred to herein represent the whole understanding of the parties
            with regard to the subject matter hereof. Each and every provision in this Contract shall be read (where
            possible) as entirely independent and severable from the other or others. In all cases where a provision
            of this Contract is reducible, invalid or unenforceable in terms of any legislation or other legal authority,
            such provision shall not affect the validity of the remaining portion of this Contract which shall remain in
            force And effect.`}
            termsp7={`71. No variation or alteration of any of these Terms and Conditions shall be effective unless it is in
            writing and signed by or on behalf of each party`}
            termsp8={`72. Indian law shall govern this Contract and the parties to this Contract submit to the exclusive
            jurisdiction of the indian courts.`}
          />
          <Termscontent
            termsh6={`* These are General terms & conditions and varies for each and every
            service which is chosen by the client for more information please
            contact us *`}
          />
        </div>
      </div>
      <Plannerfooter />
    </div>
  )
}
