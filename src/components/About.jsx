import '../App.css';


const About = () => {
  return (
    <section id="about" className="mt-[350px] text-left">
        <h1 
          className="md:text-[150px] text-[48px] md:mr-[240px] text-right"
        >
          about_<br />me<span className="text-teal-500">:</span>
        </h1>
        <p className="max-w-[1080px] md:mt-[80px] md:ml-[250px] md:text-[28px]  mt-[20px] ">&nbsp; &nbsp; A skilled software developer with expertise in frameworks like React, Node.js and Three.js. I&apos;m a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real world problems. Let&apos;s work together to bring your ideas to life!
        <br />
        <br/>
        &nbsp; &nbsp;I do UI/UX design, Motion design, Frontend Development for Web Applications and Mobile Applications.
        </p>

        <div className="div-axis md:w-[350px] md:h-[350px] w-[100px] h-[100px] mt-[20px]">
          <svg className='rotate' width="180" height="180" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M473.732 251.912L444.889 259.912L431.461 211.537L409.602 217.605L423.029 265.985L394.279 273.964L399.394 292.381L478.842 270.329L473.732 251.912Z" fill="black"/>
            <path d="M326.338 257.55C305.62 272.399 299.13 292.013 310.099 307.32C321.068 322.622 341.677 322.701 362.396 307.852C383.109 292.997 389.656 273.461 378.687 258.159C367.719 242.857 347.057 242.695 326.338 257.55ZM360.484 271.206C365.265 277.878 362 286.747 352.271 293.727C342.536 300.701 333.088 300.94 328.307 294.268C323.469 287.518 326.734 278.649 336.463 271.675C346.193 264.695 355.646 264.456 360.484 271.206Z" fill="black"/>
            <path d="M253.811 331.814C239.457 352.876 240.108 373.532 255.665 384.137C271.222 394.736 290.603 387.73 304.957 366.663C319.311 345.6 318.743 325.001 303.186 314.397C287.623 303.798 268.165 310.751 253.811 331.814ZM290.571 332.907C297.353 337.532 297.337 346.986 290.597 356.876C283.853 366.772 275.061 370.246 268.28 365.621C261.415 360.949 261.431 351.496 268.176 341.6C274.915 331.704 283.707 328.236 290.571 332.907Z" fill="black"/>
            <path d="M226.79 385.219L218.972 406.109L291.305 433.192L299.128 412.307L226.79 385.219Z" fill="black"/>
            <path d="M204.502 462.093C201.59 484.307 203.918 499.994 220.095 502.114C234.075 503.947 237.913 492.473 242.497 470.869L243.757 464.999C246.095 453.817 247.392 451.353 250.168 451.718C252.752 452.057 253.892 456.005 252.585 465.963C251.257 476.109 248.778 480.166 244.934 479.76L241.903 502.926C256.101 503.812 263.398 488.994 266.116 468.223C268.83 447.541 266.653 430.702 251.814 428.76C239.179 427.103 235.2 437.39 230.418 459.744L229.387 464.671C226.872 476.421 225.476 479.645 222.028 479.192C218.773 478.765 217.439 475.572 219.007 463.603C220.767 450.202 223.679 447.275 227.799 447.812L230.835 424.645C215.528 422.541 207.788 437.01 204.502 462.093Z" fill="black"/>
            <path d="M210.015 559.249L215.458 581.275L282.755 564.629L277.312 542.603L210.015 559.249Z" fill="black"/>
            <path d="M333.642 674.399L320.236 656.217L301.819 669.795C291.871 677.128 282.257 674.503 273.892 663.154C265.929 652.352 268.168 645.305 278.502 637.68L296.689 624.274L283.278 606.092L258.257 624.54C241.08 637.201 242.012 651.154 252.267 665.066C261.778 677.962 272.575 682.357 284.023 682.915L273.533 690.649L286.939 708.837L333.642 674.399Z" fill="black"/>
            <path d="M335.774 747.573C354.41 760.005 369.509 764.854 378.566 751.281C386.389 739.552 377.79 731.037 360.441 717.375L355.727 713.651C346.733 706.604 345.102 704.354 346.655 702.026C348.102 699.859 352.144 700.583 360.498 706.156C369.014 711.833 371.556 715.849 369.493 719.115L388.931 732.083C396.004 719.74 385.936 706.641 368.509 695.016C351.155 683.443 335.092 677.953 326.785 690.401C319.717 701.005 327.186 709.12 345.123 723.287L349.087 726.396C358.509 733.844 360.785 736.521 358.858 739.412C357.035 742.146 353.582 741.927 343.54 735.234C332.295 727.729 330.957 723.823 333.264 720.37L313.821 707.401C305.17 720.203 314.727 733.542 335.774 747.573Z" fill="black"/>
            <path d="M426.366 787.602C450.398 793.795 464.533 789.508 472.7 776.144L451.549 770.779C448.236 774.42 440.387 775.123 431.497 772.868C420.455 770.066 414.174 764.988 414.153 757.212L474.143 772.425C479.84 749.962 467.689 734.232 441.486 727.587C416.59 721.274 397.643 728.821 392.971 747.258C388.247 765.488 401.288 781.243 426.366 787.602ZM417.252 746.941C421.158 741.357 428.304 740.284 438.507 742.868C447.866 745.243 453.497 749.357 454.408 756.363L417.252 746.941Z" fill="black"/>
            <path d="M519.805 747.248L548.821 739.91L561.134 788.582L583.128 783.019L570.816 734.342L599.743 727.024L595.05 708.493L515.113 728.712L519.805 747.248Z" fill="black"/>
            <path d="M667.301 744.998C688.353 730.628 695.29 711.165 684.676 695.612C674.066 680.066 653.462 679.514 632.41 693.883C611.358 708.253 604.363 727.633 614.978 743.185C625.592 758.737 646.249 759.368 667.301 744.998ZM633.478 730.56C628.853 723.779 632.321 714.982 642.207 708.237C652.097 701.487 661.551 701.461 666.176 708.243C670.858 715.102 667.389 723.894 657.504 730.644C647.613 737.394 638.16 737.415 633.478 730.56Z" fill="black"/>
            <path d="M741.515 672.419C756.349 651.69 756.177 631.023 740.864 620.07C725.552 609.112 706.015 615.674 691.182 636.403C676.349 657.133 676.442 677.737 691.755 688.695C707.067 699.653 726.682 693.148 741.515 672.419ZM704.791 670.476C698.119 665.7 698.349 656.252 705.317 646.518C712.286 636.778 721.156 633.508 727.828 638.284C734.578 643.117 734.349 652.57 727.38 662.304C720.411 672.039 711.541 675.31 704.791 670.476Z" fill="black"/>
            <path d="M769.772 619.648L778.069 598.945L706.376 570.2L698.079 590.903L769.772 619.648Z" fill="black"/>
            <path d="M793.807 543.306C797.223 521.166 795.26 505.426 779.135 502.936C765.202 500.785 761.098 512.166 756.02 533.655L754.63 539.499C752.031 550.629 750.682 553.056 747.911 552.629C745.338 552.228 744.291 548.259 745.822 538.332C747.385 528.218 749.958 524.223 753.786 524.718L757.354 501.624C743.182 500.41 735.546 515.056 732.348 535.765C729.161 556.374 730.952 573.259 745.739 575.546C758.338 577.488 762.546 567.296 767.838 545.056L768.989 540.155C771.77 528.473 773.239 525.28 776.676 525.806C779.921 526.311 781.182 529.535 779.338 541.462C777.275 554.822 774.291 557.681 770.187 557.046L766.619 580.14C781.874 582.593 789.942 568.306 793.807 543.306Z" fill="black"/>
            <path d="M790.519 446.048L785.576 423.907L717.914 438.996L722.857 461.141L790.519 446.048Z" fill="black"/>
            <path d="M669.576 328.089L682.561 346.578L701.29 333.422C711.399 326.318 720.951 329.167 729.055 340.703C736.769 351.688 734.368 358.682 723.857 366.063L705.373 379.047L718.357 397.536L743.8 379.667C761.258 367.401 760.649 353.432 750.717 339.292C741.503 326.177 730.811 321.536 719.378 320.714L730.045 313.224L717.061 294.734L669.576 328.089Z" fill="black"/>
            <path d="M669.127 254.881C650.784 242.027 635.799 236.834 626.435 250.199C618.346 261.741 626.742 270.454 643.773 284.512L648.398 288.34C657.232 295.59 658.81 297.876 657.206 300.168C655.711 302.303 651.685 301.486 643.461 295.725C635.075 289.85 632.627 285.777 634.763 282.558L615.627 269.152C608.273 281.329 618.039 294.652 635.195 306.678C652.278 318.642 668.211 324.506 676.799 312.246C684.112 301.808 676.831 293.527 659.221 278.949L655.331 275.751C646.081 268.09 643.867 265.361 645.862 262.512C647.747 259.824 651.195 260.121 661.081 267.043C672.148 274.803 673.398 278.741 671.013 282.142L690.153 295.548C699.096 282.954 689.846 269.397 669.127 254.881Z" fill="black"/>
            <path d="M579.497 212.784C555.617 206.044 541.388 210.003 532.914 223.18L553.934 229.024C557.33 225.461 565.19 224.94 574.028 227.399C585.007 230.451 591.169 235.675 591.013 243.445L531.388 226.862C525.174 249.185 536.96 265.19 563.007 272.435C587.747 279.32 606.861 272.211 611.96 253.883C617.101 235.768 604.424 219.722 579.497 212.784ZM587.674 253.643C583.643 259.133 576.471 260.05 566.335 257.227C557.033 254.638 551.497 250.393 550.747 243.373L587.674 253.643Z" fill="black"/>
          </svg>
        </div>

        <div></div>
    </section>
  )
}

export default About