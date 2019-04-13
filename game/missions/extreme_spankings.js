// Extreme spankings =====================================================================================
function game_init_extreme_spankings(){
    console.log("[Extreme spankings] starting...");
    other_objective_1_fulfilled = true;
    current_game_counter_x = 2;
    show_mission_screen("Extreme spankings", "Play the match normally, but get a paddle ready!");
}
function on_death_extreme_spankings(){
    
    var actual_spank_count = current_game_counter_x;
    if(current_game_counter_x >= 32){
        actual_spank_count = 32;
    }

    showConditionalInstruction("<span style='color:#FF0D0D'>Bad slut! Spank your ass " + actual_spank_count + " times with that paddle.</span>");

    // Calculate new X
    current_game_counter_x *= 2;

    // Condition 1: X must be <= 16 at all times
    if(current_game_counter_x > 16){
        other_objective_1_fulfilled = false;
    }

    // Condition 2: X must be >= 64 at least once
    if(current_game_counter_x >= 64){
        other_objective_2_fulfilled = true;
    }

}
function on_rez_extreme_spankings(){

    // Half X, unless X < 4
    if(current_game_counter_x / 2 < 2){
        current_game_counter_x = 2;
    }else{
        current_game_counter_x /= 2;
    }

    showConditionalInstruction("Good rez. Your counter is now at " + current_game_counter_x + ".");

}
function on_kill_extreme_spankings(){
    showConditionalInstruction("Kill logged.");
}
function on_ult_extreme_spankings(){
    showConditionalInstruction("Good slut! Your counter has been reset.");
    current_game_counter_x = 2;
}
function on_mission_end_extreme_spankings(){
    $(".mission_conditional_instruction").fadeOut(100);
    askQuestion("Did your team emerge victorious?", extreme_spankings_mission_end_handler);
}
function extreme_spankings_mission_end_handler(match_result){
    // Check conditions:
    if(other_objective_1_fulfilled === true || other_objective_2_fulfilled === true){
        var conditionOK = true;
    }else{
        var conditionOK = false;
    }
    cleanupMission(conditionOK, match_result);
}
// =======================================================================================================
