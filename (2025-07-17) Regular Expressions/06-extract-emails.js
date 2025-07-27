function extractEmails (text) {
    let regExpr = /[^\.\-\_A-Za-z\d](?<email>[A-Za-z\d][A-Za-z\d\.\-\_]*[A-Za-z\d]@[A-Za-z][A-Za-z\-]*[A-Za-z](\.[A-Za-z][A-Za-z\-]*[A-Za-z])+)/g;
    let emails = Array.from(text.matchAll(regExpr));

    for (let email of emails) {
        console.log(email.groups.email);
    }
}

extractEmails("Please contact us at: support@github.com.");
extractEmails("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.");
extractEmails("Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.");
