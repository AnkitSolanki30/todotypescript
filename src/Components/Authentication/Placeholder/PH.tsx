import React, { useState } from 'react'
import "./ph.scss"

const PH = () => {

  const suffixText: string = ".trinarybits.com"
  const placeholder: string = "your-workspace"

  const [asas, setAsas] = useState<string>("trinarybits.com")

  const [domainEmail, setDomainEmail] = useState<string>("")

  console.log(window.$BASE_URL);
  

// CHANGING URL USING STRING SPLIT & CONCATE
  // let sentence = window.$BASE_URL
  // let aftersentence = sentence.split("http://");
  // let domain = aftersentence[1];
  // console.log(aftersentence);
  // console.log(domain);
  // let newURL = `http://${domainEmail}.${domain}`

// CHANGING URL FROM LIVE URL
  const protocol = window.location.protocol;
  const host = window.location.host;
  const pathName = window.location.pathname;

  console.log("protocol", protocol);
  console.log("host", host);
  console.log("pathName", pathName);

  const newURL = `${protocol}/${domainEmail}.${host}${pathName}`
  
  const handleSet = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(newURL);
    window.location.assign(newURL)
}


  return (


    <>
      <form className='pt-5'>
        {/* <label htmlFor="amount">Total Amount</label>
        <div className="input-wrapper">
          <div className="prefix">$</div>
          <input type="number" id="amount" placeholder={`Amount`} />
        </div> */}

        <br />

        <label htmlFor="weight">your-workspace</label>
        <div className="input-wrapper ">
          <input type="text" id="weight" placeholder={`your-website`} value={domainEmail} onChange={(e) => (setDomainEmail(e.target.value))} />
          <div className="suffix">{suffixText}</div>
        </div>
        <br/>
    <button className='btn btn-primary' onClick={handleSet}>Set</button>

      </form>




      <br />
      <br />
      <br />

{/* <div>
  <input type="text" id="weight" placeholder={`your-website`} className="falana" data-suffix=".abc.com"/>
</div>
<br />
      <br />
      <br /> */}
      

      {/* <div className="position_relative" aria-describedby="Text input with .slack.com appended to the text value.">
        <div className="c-input_text_overlay c-input_text_overlay--large" data-overlay-prefix="" data-overlay-suffix=".slack.com" aria-hidden="true" data-qa="text_overlay_suffix">
          your-workspace
        </div>
        <input data-qa="signin_domain_input" spellCheck="false" min="0" max="0" width="0" aria-describedby="domain_hint" aria-invalid="false" aria-labelledby="domain_label" aria-required="false" aria-label="" autoComplete="off" className="c-input_text c-input_text--large full_width margin_bottom_100" id="domain" name="domain" placeholder="your-workspace" type="text" value={domainEmail} onChange={(e) => { setDomainEmail(e.target.value) }}/>
      </div>
      <br /><br /> */}
      {/* <div className="d-flex position-relative">
        <div>
          <input type="text" value={domainEmail} placeholder='your-workspace' onChange={(e) => (setDomainEmail(e.target.value))} />
        </div>
        <div className="demo position-absolute">{suffixText}</div>
      </div>
      <br />
      <br />

      <br />
      <br /> */}

      {/* <div className="d-flex position-relative">
        <div className="">
          <input type="text" />
        </div>
        <div className='demo1 position-absolute '>{placeholder}</div>
        <div className="demo2 position-relative">{suffixText}</div>
      </div>
      <br /> */}


      {/* <div data-qa-formtext="true">
        <div className=' position-relative' aria-describedby="Text input with .slack.com appended to the text value.">
          <div className="c-input_text_overlay c-input_text_overlay--large" data-overlay-prefix="" data-overlay-suffix=".slack.com" aria-hidden="true" data-qa="text_overlay_suffix">your-workspace</div>
          <input className="c-input_text c-input_text--large full_width margin_bottom_100" data-qa="signin_domain_input" spellCheck="false" min="0" max="0" aria-describedby="domain_hint" aria-invalid="false" aria-labelledby="domain_label" aria-required="false" aria-label="" autoComplete="off" id="domain" name="domain" placeholder="your-workspace" type="text" value={domainEmail} width="0" onChange={(e) => { setDomainEmail(e.target.value) }} />
        </div>
      </div> */}

      {/* <div className="input-box">
        <input type="tel" placeholder="210 123 4567" />
        <span className="prefix">.slack.com</span>
      </div> */}

    </>


    // <div class="position_relative" aria-describedby="Text input with .slack.com appended to the text value.">

    // <div class="c-input_text_overlay c-input_text_overlay--large" data-overlay-prefix="" data-overlay-suffix=".slack.com" aria-hidden="true" data-qa="text_overlay_suffix">your-workspace</div>

    // <input data-qa="signin_domain_input" spellcheck="false" min="0" max="0" aria-describedby="domain_hint" aria-invalid="false" aria-labelledby="domain_label" aria-required="false" aria-label="" autocomplete="off" class="c-input_text c-input_text--large full_width margin_bottom_100" id="domain" name="domain" placeholder="your-workspace" type="text" value="" width="0">

    // </div> 




    // <div id="my-input-container">
    //   <input type="text" value={asas} onChange={(e) => {setAsas(e.target.value)}}/>
    //   <span id="my-suffix">{suffixText}</span>
    // </div>

  )
}

export default PH