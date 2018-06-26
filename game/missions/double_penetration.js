// Double penetration ====================================================================================

var double_penetration_match_result = false;
var double_penetration_medal_result = false;

function game_init_double_penetration(){
    console.log("[Double penetration] starting...");
    show_mission_screen("Double penetration", "Get two dildos ready. Sit on one and suck on the other. Ride the dildo when you have a beam on.");
}
function on_death_double_penetration(){
    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Swap the dildos.</span>");
    current_game_deaths += 1;
}
function on_rez_double_penetration(){
    current_game_rezzes += 1;
    showConditionalInstruction("Deepthroat the dildo for 3 times.");
}
function on_kill_double_penetration(){
    showConditionalInstruction("Noted.");
    current_game_kills += 1;
}
function on_ult_double_penetration(){
    showConditionalInstruction("Good slut. Now hold a deepthroat until your ult is over!");
    current_game_ults += 1;
}
function on_mission_end_double_penetration(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", double_penetration_mission_end_q1);
}
function double_penetration_mission_end_q1(match_result){
    double_penetration_match_result = match_result;
    askQuestion("Did you get a gold medal in healing, and at least one other silver medal?", double_penetration_mission_end_q2);
}
function double_penetration_mission_end_q2(medal_result){
    double_penetration_medal_result = medal_result;
    askQuestion("Did you get play of the game?", double_penetration_mission_end_handler);
}
function double_penetration_mission_end_handler(potg_result){
    // Check conditions:
    if(double_penetration_medal_result === true || potg_result === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, double_penetration_match_result);
}
// =======================================================================================================
