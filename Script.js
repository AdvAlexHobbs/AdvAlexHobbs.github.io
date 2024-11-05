//Todo: text box with a copy that doesn't wipe it, have it be multi line if possible

document.getElementById('copytextbutton').addEventListener('click', function (e){
    
    copytextfunc();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('Activedevbutton').addEventListener('click', function (e){
    
    updatetext_active();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('Suspendingdevbutton').addEventListener('click', function (e){
    
    updatetext_suspending();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('suspendingcaseeventbutton').addEventListener('click', function (e){
    
    updatetext_suspendcaseevent();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('pidwarningbutton').addEventListener('click', function (e){
    
    pidwarningbutton();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('slownessfrcbutton').addEventListener('click', function (e){
    
    updatetext_frcslownesscaseevent();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('sevendaywarningbutton').addEventListener('click', function (e){
    
    updatetext_sevendaywarning();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('sevendayclosurebutton').addEventListener('click', function (e){
    
    updatetext_sevendayclosure();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('thankcustomerbutton').addEventListener('click', function (e){
    
    thankcustomer();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('thankcustomerclosebutton').addEventListener('click', function (e){
    
    thankcustomer_close();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

document.getElementById('requestcsatbutton').addEventListener('click', function (e){
    
    updatetext_requestcsat();
    e.preventDefault();
    showToast("Text Copied to Clipboard","Helper",4000);
});

// gets the input field and adds event when data is entered
document.getElementById('NewInput').addEventListener('keyup', function (current){

    console.log (current);
    let currentkey = current.key;
    if (currentkey == 'Enter'){updatetext();};
});




function thankcustomer () {


    let hob_daytext = "Good Morning, ";

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
        hob_daytext = ("Good Morning, ")
    } else {
        hob_daytext = ("Good Afternoon, ")
    };

    const hob_array1 = ["Thanks for your assistance, ", "Many thanks for your assistance, ", "Thank you for your help with this, ", "Many thanks for your help, ", "Thank you for your assistance, "];

    const hob_sel1 = Math.floor(Math.random() * hob_array1.length);



    const hob_array2 = ["I have passed this on to the relevant team now", "I am currently passing this onto the team responsible for this issue", "I'm passing this on now", "I have relayed this to the relevant team", "I've been in touch with the team responsible for this issue to pass it along"];

    const hob_sel2 = Math.floor(Math.random() * hob_array2.length);




    const hob_array3 = [" and will report back when further information becomes available.", ", and we'll be in touch as this progresses", ", we'll be in contact when further information becomes available.", " and we'll be in touch again when we receive further information."];

    const hob_sel3 = Math.floor(Math.random() * hob_array3.length);







    let printtext = hob_daytext + "\n\n" + (hob_sel1, hob_array1[hob_sel1]) + (hob_sel2, hob_array2[hob_sel2]) + (hob_sel3, hob_array3[hob_sel3]);


  navigator.clipboard.writeText(printtext);

}



function thankcustomer_close () {


    let hob_daytext = "Good Morning, ";

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
        hob_daytext = ("Good Morning, ")
    } else {
        hob_daytext = ("Good Afternoon, ")
    };

    const hob_array1 = ["\n\nthanks ", "\n\nMany thanks ", "\n\nThank you "];

    const hob_sel1 = Math.floor(Math.random() * hob_array1.length);



    const hob_array2 = ["for confirming, I will now close this case.\n\n", "for letting us know, I will now close this case.\n\n", "for letting us know, I'll close this case now.\n\n", "for confirming, I'll close this case now.\n\n"];

    const hob_sel2 = Math.floor(Math.random() * hob_array2.length);




    const hob_array3 = ["If you have any further issues in future, ", "If you do have any other issues in future, ", "Should you encounter any other issues in future, "];

    const hob_sel3 = Math.floor(Math.random() * hob_array3.length);







    let printtext = hob_daytext + (hob_sel1, hob_array1[hob_sel1]) + (hob_sel2, hob_array2[hob_sel2]) + (hob_sel3, hob_array3[hob_sel3]) + "please raise a new case and we will investigate accordingly.";


  navigator.clipboard.writeText(printtext);

}


function updatetext_requestcsat () {

    let printtext = "You will receive a request for a short Customer Satisfaction Survey via email shortly, we would appreciate you filling this out to tell us about your experience with us and how we helped with this issue.";

  navigator.clipboard.writeText(printtext);

}

function updatetext_suspendcaseevent () {

    let printtext = "Suspending while with Development Team";

  navigator.clipboard.writeText(printtext);

}
function updatetext_frcslownesscaseevent () {

    let hob_daytext = "Good Morning, ";

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
        hob_daytext = ("Good Morning, ")
    } else {
        hob_daytext = ("Good Afternoon, ")
    };

    let printtext = hob_daytext;

    
    const hob_array1 = ["Thank you for bringing this to our attention,", "Please accept our apologies for the inconvenience,", "Thank you for raising this with us,"];

    const hob_sel1 = Math.floor(Math.random() * hob_array1.length);

    printtext = printtext + "\n\n" + (hob_sel1, hob_array1[hob_sel1]);

    
    const hob_array2 = [" we are commencing investigation now ", " we are looking into this "];

    const hob_sel2 = Math.floor(Math.random() * hob_array2.length);

    printtext = printtext + (hob_sel2, hob_array2[hob_sel2]);

    
    const hob_array3 = ["and will be in touch ", "and will provide updates ", "and will report back "];

    const hob_sel3 = Math.floor(Math.random() * hob_array3.length);

    printtext = printtext + (hob_sel3, hob_array3[hob_sel3]);

    
    const hob_array4 = ["when further information becomes available.", "as this progresses."];

    const hob_sel4 = Math.floor(Math.random() * hob_array2.length);

    printtext = printtext + (hob_sel4, hob_array4[hob_sel4]);

  navigator.clipboard.writeText(printtext);

}


function pidwarningbutton () {


    let hob_daytext = "Good Morning, ";

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
        hob_daytext = ("Good Morning, ")
    } else {
        hob_daytext = ("Good Afternoon, ")
    };

    let printtext = hob_daytext + "\n\nUnfortunately, the content of your case contravenes our local policy regarding the handling of patient identifiable information and as such we are required to delete it from our systems. Please can I ask that you edit your case with any identifiable information either obfuscated or removed.\n\nIf you have any questions regarding our local data protection policy, please email our clinical governance team at AHCClinicalTeam@oneadvanced.com, who will be more than happy to assist.\n\nFor the avoidance of doubt, we cannot accept a patient's name, date of birth, addresses, or gender. We are only allowed to accept NHS numbers, case ID's and person IDs.";


  navigator.clipboard.writeText(printtext);

}

function updatetext_sevendayclosure () {


    let hob_daytext = "Good Morning, ";

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
        hob_daytext = ("Good Morning, ")
    } else {
        hob_daytext = ("Good Afternoon, ")
    };

    let printtext = hob_daytext + "\n\nPlease be advised that, as this case has been dormant for some time, it is likely that this case has been resolved, cannot be reproduced, or cannot be progressed further.\n\nFor this reason, we will now close this case to enable us to maintain an efficient troubleshooting environment.\n\nTo reopen this, please get in touch either here or by calling us at 0330 343 0067 Option 4 to discuss further options for progressing this issue.";


  navigator.clipboard.writeText(printtext);

}

function updatetext_sevendaywarning () {


    let hob_daytext = "Good Morning, ";

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
        hob_daytext = ("Good Morning, ")
    } else {
        hob_daytext = ("Good Afternoon, ")
    };

    let printtext = hob_daytext + "\n\nPlease be advised that, as this case has been dormant for some time, it is likely that this case has been resolved, cannot be reproduced, or cannot be progressed further.\n\nFor this reason, we are requesting your permission to close this case as we are unable to facilitate cases of this nature.\n\nTo enable us to maintain an efficient troubleshooting environment, we may close this case after seven days of this message being sent.\n\nTo prevent this, please get in touch either here or by calling us at 0330 343 0067 Option 4 to discuss further options for progressing this issue.";


  navigator.clipboard.writeText(printtext);

}






function copytextfunc () {

    
    let target = document.getElementById('targettext2');
    let usertext = document.getElementById('copytext');
    console.log (usertext.value);


    //testing clipboard copy

    usertext.select();
    usertext.setSelectionRange(0, 99999); // For mobile devices



    
  navigator.clipboard.writeText(usertext.value);


    //wipe the field
    //usertext.value = '';

    //focusses on the text field again
  //  usertext.focus();
}


function updatetext_active () {

    
    let target = document.getElementById('targettext');
    let usertext = document.getElementById('NewInput');
    console.log (usertext.value);


    //testing clipboard copy

    usertext.select();
    usertext.setSelectionRange(0, 99999); // For mobile devices



    let hob_daytext = "Good Morning, ";

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
        hob_daytext = ("Good Morning, ")
    } else {
        hob_daytext = ("Good Afternoon, ")
    };



    const hob_array1 = ["Please be advised that t", "T", "Following investigation into this issue, t"];

    const hob_sel1 = Math.floor(Math.random() * hob_array1.length);
    

    const hob_array2 = [" during this period of investigation, ", " while they investigate, ", " whilst the team investigates ", " while their work progresses "];

    const hob_sel2 = Math.floor(Math.random() * hob_array2.length);
    

    const hob_array3 = ["bringing this to our attention, and i", "bringing this to our attention, i", "raising this with us. I", "notifying us of this issue, i"];

    const hob_sel3 = Math.floor(Math.random() * hob_array3.length);


    let printtext = hob_daytext + "\n\n" + (hob_sel1, hob_array1[hob_sel1]) + "his case has been raised to our Development Team. For your reference, the Jira ticket is: " + (usertext.value) + "\n\nThis case will remain open" + (hob_sel2, hob_array2[hob_sel2]) + "and we will be in touch when further information becomes available.\n\nThank you once again for " + (hob_sel3, hob_array3[hob_sel3]) + "f you have any further issues then please feel free to raise a new case with us and we will investigate accordingly.";

    
  navigator.clipboard.writeText(printtext);


    //wipe the field
    usertext.value = '';

    //focusses on the text field again
    usertext.focus();
}



function updatetext_suspending () {

    
    let target = document.getElementById('targettext');
    let usertext = document.getElementById('NewInput');
    console.log (usertext.value);


    //testing clipboard copy

    usertext.select();
    usertext.setSelectionRange(0, 99999); // For mobile devices



    // get current text from the paragraph in html
    let currenttext = target.innerText;

    currenttext = "test text";

    let hob_daytext = "Good Morning, ";

    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
        hob_daytext = ("Good Morning, ")
    } else {
        hob_daytext = ("Good Afternoon, ")
    };

 

    const hob_array1 = ["Please be advised that t", "T", "Following investigation into this issue, t"];

    const hob_sel1 = Math.floor(Math.random() * hob_array1.length);
    

    const hob_array2 = [" during this period of investigation, ", " while they investigate, ", " whilst the team investigates ", " while their work progresses "];

    const hob_sel2 = Math.floor(Math.random() * hob_array2.length);
    

    const hob_array3 = ["bringing this to our attention, and i", "bringing this to our attention, i", "raising this with us. I", "notifying us of this issue, i"];

    const hob_sel3 = Math.floor(Math.random() * hob_array3.length);


    let printtext = hob_daytext + "\n\n" + (hob_sel1, hob_array1[hob_sel1]) + "his case has been raised to our Development Team. For your reference, the Jira ticket is: " + (usertext.value) + "\n\nThis case will be set to Suspended" + (hob_sel2, hob_array2[hob_sel2]) + "and we will be in touch when further information becomes available.\n\nThank you once again for " + (hob_sel3, hob_array3[hob_sel3]) + "f you have any further issues then please feel free to raise a new case with us and we will investigate accordingly.";






    
  navigator.clipboard.writeText(printtext);


    //wipe the field
    usertext.value = '';

    //focusses on the text field again
    usertext.focus();

}



let icon = {
    info:
    '<span class="material-symbols-outlined">Helper</span>',
};

const showToast = (
    message = "Sample Message",
    toastType = "info",
    duration = 5000) => {
    if (
        !Object.keys(icon).includes(toastType))
        toastType = "info";

    let box = document.createElement("div");
    box.classList.add(
        "toast", `toast-${toastType}`);
    box.innerHTML = ` <div class="toast-content-wrapper">
                      <div class="toast-icon">
                      ${icon[toastType]}
                      </div>
                      <div class="toast-message">${message}</div>
                      <div class="toast-progress"></div>
                      </div>`;
    duration = duration || 5000;
    box.querySelector(".toast-progress").style.animationDuration =
            `${duration / 1000}s`;

    let toastAlready = 
        document.body.querySelector(".toast");
    if (toastAlready) {
        toastAlready.remove();
    }

    document.body.appendChild(box)};

let submit = 
    document.querySelector(".custom-toast.success-toast");
let information = 
    document.querySelector(".custom-toast.info-toast");
let failed = 
    document.querySelector(".custom-toast.danger-toast");
let warn = 
    document.querySelector(".custom-toast.warning-toast");

