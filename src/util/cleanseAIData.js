export function cleansSuggestion(suggestion){
    let suggestionsArray; //stores cleansed suggestions field
    const cleansedSuggestions = suggestion.replace(
        /\*\*(.*?)\*\*/g,
        "$1"
      );

    suggestionsArray = cleansedSuggestions?.split(/\n/g);
    return suggestionsArray;
}