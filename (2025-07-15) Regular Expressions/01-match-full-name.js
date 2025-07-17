function matchFullName (text) {
    let regExpr = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    console.log(Array.from(text.match(regExpr)).join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");