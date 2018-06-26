// Healslut brainwashing =================================================================================

var healslut_brainwashing_match_result = false;

function game_init_healslut_brainwashing(){
    console.log("[Healslut brainwashing] starting...");
    show_mission_screen("Healslut brainwashing", "When you have a healing beam on, smile and giggle, thank characters you are healing in your best mercy voice.<br />When you have a damage beam on, encourage the player you are buffing to fight better. Tell them how they can fuck you if they are victorious.");
}
function on_death_healslut_brainwashing(){
    showConditionalInstruction("Bad slut!");
    current_game_deaths += 1;
}
function on_rez_healslut_brainwashing(){
    current_game_rezzes += 1;
    showConditionalInstruction("Noted.");
}
function on_kill_healslut_brainwashing(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_healslut_brainwashing(){
    showConditionalInstruction("Noted.");
    current_game_ults += 1;
}
function on_mission_end_healslut_brainwashing(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", healslut_brainwashing_mission_end_q1);
}
function healslut_brainwashing_mission_end_q1(match_result){
    healslut_brainwashing_match_result = match_result;
    askQuestion("Did you get at least two gold medals?", healslut_brainwashing_mission_end_handler);
}
function healslut_brainwashing_mission_end_handler(gold_medal_result){
    cleanupMission(gold_medal_result, healslut_brainwashing_match_result);
}
// =======================================================================================================
