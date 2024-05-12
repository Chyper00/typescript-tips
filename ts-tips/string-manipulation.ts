// string manipulation

type SampleText = "hello galaxy";

type TextUppercase = Uppercase<SampleText>; // "HELLO GALAXY"
type TextCapitalize = Capitalize<SampleText>; // "Hello galaxy"
type TextUncapitalize = Uncapitalize<"HELLO GALAXY">; // "hELLO GALAXY"
type TextLowercase = Lowercase<SampleText>; // "hello galaxy"