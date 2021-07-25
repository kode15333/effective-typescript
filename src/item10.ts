export {};

function getStringLen(foo: String) {
    return foo.length;
}

getStringLen("hello");
getStringLen(new String("hello"));

function isGeeting(pharse: String) {
    return ["hello", "good day"].includes(pharse);
}


