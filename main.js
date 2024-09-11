String.prototype.idBlendParams = function(replacements) {
    let result = this;
    Object.keys(replacements).forEach((variable) => {
        result = result.replace(new RegExp("{%idev_" + variable + "%}", "g"), replacements[variable]);
    });
    return result;
};

function idBlend(selector) {
    return {
        qSection: function(replacements) {
            let section = selector;
            let template = document.querySelector(section).outerHTML;

            Object.keys(replacements).forEach((variable) => {
                template = template.replace(new RegExp("{%idev_" + variable + "%}", "g"), replacements[variable]);
            });

            document.querySelector(section).innerHTML = template;
        }
    };
}
