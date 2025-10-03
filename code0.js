gdjs.HomeCode = {};
gdjs.HomeCode.localVariables = [];
gdjs.HomeCode.forEachIndex2 = 0;

gdjs.HomeCode.forEachIndex3 = 0;

gdjs.HomeCode.forEachObjects2 = [];

gdjs.HomeCode.forEachObjects3 = [];

gdjs.HomeCode.forEachTemporary2 = null;

gdjs.HomeCode.forEachTemporary3 = null;

gdjs.HomeCode.forEachTotalCount2 = 0;

gdjs.HomeCode.forEachTotalCount3 = 0;

gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects1= [];
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects2= [];
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects3= [];
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects4= [];
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects5= [];
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects6= [];
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1= [];
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects2= [];
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects3= [];
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects4= [];
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects5= [];
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects6= [];
gdjs.HomeCode.GDClipboardObjects1= [];
gdjs.HomeCode.GDClipboardObjects2= [];
gdjs.HomeCode.GDClipboardObjects3= [];
gdjs.HomeCode.GDClipboardObjects4= [];
gdjs.HomeCode.GDClipboardObjects5= [];
gdjs.HomeCode.GDClipboardObjects6= [];
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects1= [];
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2= [];
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3= [];
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4= [];
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5= [];
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects6= [];
gdjs.HomeCode.GDTitleObjects1= [];
gdjs.HomeCode.GDTitleObjects2= [];
gdjs.HomeCode.GDTitleObjects3= [];
gdjs.HomeCode.GDTitleObjects4= [];
gdjs.HomeCode.GDTitleObjects5= [];
gdjs.HomeCode.GDTitleObjects6= [];
gdjs.HomeCode.GDStart_9595TextObjects1= [];
gdjs.HomeCode.GDStart_9595TextObjects2= [];
gdjs.HomeCode.GDStart_9595TextObjects3= [];
gdjs.HomeCode.GDStart_9595TextObjects4= [];
gdjs.HomeCode.GDStart_9595TextObjects5= [];
gdjs.HomeCode.GDStart_9595TextObjects6= [];
gdjs.HomeCode.GDCredits_9595TextObjects1= [];
gdjs.HomeCode.GDCredits_9595TextObjects2= [];
gdjs.HomeCode.GDCredits_9595TextObjects3= [];
gdjs.HomeCode.GDCredits_9595TextObjects4= [];
gdjs.HomeCode.GDCredits_9595TextObjects5= [];
gdjs.HomeCode.GDCredits_9595TextObjects6= [];
gdjs.HomeCode.GDCredits_9595DesignerObjects1= [];
gdjs.HomeCode.GDCredits_9595DesignerObjects2= [];
gdjs.HomeCode.GDCredits_9595DesignerObjects3= [];
gdjs.HomeCode.GDCredits_9595DesignerObjects4= [];
gdjs.HomeCode.GDCredits_9595DesignerObjects5= [];
gdjs.HomeCode.GDCredits_9595DesignerObjects6= [];
gdjs.HomeCode.GDCredits_9595ArtistObjects1= [];
gdjs.HomeCode.GDCredits_9595ArtistObjects2= [];
gdjs.HomeCode.GDCredits_9595ArtistObjects3= [];
gdjs.HomeCode.GDCredits_9595ArtistObjects4= [];
gdjs.HomeCode.GDCredits_9595ArtistObjects5= [];
gdjs.HomeCode.GDCredits_9595ArtistObjects6= [];
gdjs.HomeCode.GDCredits_9595MusicObjects1= [];
gdjs.HomeCode.GDCredits_9595MusicObjects2= [];
gdjs.HomeCode.GDCredits_9595MusicObjects3= [];
gdjs.HomeCode.GDCredits_9595MusicObjects4= [];
gdjs.HomeCode.GDCredits_9595MusicObjects5= [];
gdjs.HomeCode.GDCredits_9595MusicObjects6= [];
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1= [];
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects2= [];
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects3= [];
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects4= [];
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects5= [];
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects6= [];


gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDIris_95959595Transition_95959595CloseObjects5Objects = Hashtable.newFrom({"Iris_Transition_Close": gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects5});
gdjs.HomeCode.asyncCallback25546804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HomeCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}gdjs.HomeCode.localVariables.length = 0;
}
gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HomeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.HomeCode.asyncCallback25546804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3, gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5.length;i<l;++i) {
    if ( gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5[i].getVariableString(gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5[i].getVariables().getFromIndex(0)) == "Start" ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5[k] = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5[i];
        ++k;
    }
}
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5.length = k;
if (isConditionTrue_0) {
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects5.length = 0;

{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "start level.wav", 1, false, 100, 1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDIris_95959595Transition_95959595CloseObjects5Objects, 0, 0, "Transition");
}}

}


{

gdjs.copyArray(gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3, gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4.length;i<l;++i) {
    if ( gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4[i].getVariableString(gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4[i].getVariables().getFromIndex(0)) == "Credits" ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4[k] = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4[i];
        ++k;
    }
}
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Main Menu");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Credit Menu");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "option select.wav", 1, false, 100, 1);
}
{ //Subevents
gdjs.HomeCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "L1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "Cross", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.HomeCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.eventsList3 = function(runtimeScene) {

};gdjs.HomeCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Start");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "option select.wav", 1, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Left", "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Credits");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "option select.wav", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Check_Mark"), gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2);

for (gdjs.HomeCode.forEachIndex3 = 0;gdjs.HomeCode.forEachIndex3 < gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2.length;++gdjs.HomeCode.forEachIndex3) {
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3.length = 0;


gdjs.HomeCode.forEachTemporary3 = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2[gdjs.HomeCode.forEachIndex3];
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3.push(gdjs.HomeCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3.length;i<l;++i) {
    if ( gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3[i].getVariableString(gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3[k] = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3[i];
        ++k;
    }
}
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3.length ;i < len;++i) {
    gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3[i].getBehavior("Animation").setAnimationName("Checked");
}
}
{ //Subevents: 
gdjs.HomeCode.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Check_Mark"), gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects1);

for (gdjs.HomeCode.forEachIndex2 = 0;gdjs.HomeCode.forEachIndex2 < gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects1.length;++gdjs.HomeCode.forEachIndex2) {
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2.length = 0;


gdjs.HomeCode.forEachTemporary2 = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects1[gdjs.HomeCode.forEachIndex2];
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2.push(gdjs.HomeCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2[i].getVariableString(gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2[i].getVariables().getFromIndex(0)) != runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2[k] = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2[i].getBehavior("Animation").setAnimationName("Unchecked");
}
}}
}

}


};gdjs.HomeCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_any_button_released.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Credit Menu");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Main Menu");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "option select.wav", 1, false, 100, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}}

}


};gdjs.HomeCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "L2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.advancedWindow.maximize(true, runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("");
}{runtimeScene.getGame().getVariables().getFromIndex(6).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setBoolean(false);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "home and ess.wav", 0, true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Iris_Transition_Open"), gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1[k] = gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1 */
{for(var i = 0, len = gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.HomeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.HomeCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Iris_Transition_Close"), gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1[k] = gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hospital 1.1", false);
}}

}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects1.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects2.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects3.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects4.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects5.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects6.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects2.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects3.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects4.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects5.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects6.length = 0;
gdjs.HomeCode.GDClipboardObjects1.length = 0;
gdjs.HomeCode.GDClipboardObjects2.length = 0;
gdjs.HomeCode.GDClipboardObjects3.length = 0;
gdjs.HomeCode.GDClipboardObjects4.length = 0;
gdjs.HomeCode.GDClipboardObjects5.length = 0;
gdjs.HomeCode.GDClipboardObjects6.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects1.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects6.length = 0;
gdjs.HomeCode.GDTitleObjects1.length = 0;
gdjs.HomeCode.GDTitleObjects2.length = 0;
gdjs.HomeCode.GDTitleObjects3.length = 0;
gdjs.HomeCode.GDTitleObjects4.length = 0;
gdjs.HomeCode.GDTitleObjects5.length = 0;
gdjs.HomeCode.GDTitleObjects6.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects1.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects2.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects3.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects4.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects5.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects6.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects1.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects2.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects3.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects4.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects5.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects6.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects1.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects2.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects3.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects4.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects5.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects6.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects1.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects2.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects3.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects4.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects5.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects6.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects1.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects2.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects3.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects4.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects5.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects6.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects2.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects3.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects4.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects5.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects6.length = 0;

gdjs.HomeCode.eventsList6(runtimeScene);
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects1.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects2.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects3.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects4.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects5.length = 0;
gdjs.HomeCode.GDEndoscopy_9595SuperstoreObjects6.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects1.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects2.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects3.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects4.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects5.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595OpenObjects6.length = 0;
gdjs.HomeCode.GDClipboardObjects1.length = 0;
gdjs.HomeCode.GDClipboardObjects2.length = 0;
gdjs.HomeCode.GDClipboardObjects3.length = 0;
gdjs.HomeCode.GDClipboardObjects4.length = 0;
gdjs.HomeCode.GDClipboardObjects5.length = 0;
gdjs.HomeCode.GDClipboardObjects6.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects1.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects2.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects3.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects4.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects5.length = 0;
gdjs.HomeCode.GDMenu_9595Check_9595MarkObjects6.length = 0;
gdjs.HomeCode.GDTitleObjects1.length = 0;
gdjs.HomeCode.GDTitleObjects2.length = 0;
gdjs.HomeCode.GDTitleObjects3.length = 0;
gdjs.HomeCode.GDTitleObjects4.length = 0;
gdjs.HomeCode.GDTitleObjects5.length = 0;
gdjs.HomeCode.GDTitleObjects6.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects1.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects2.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects3.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects4.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects5.length = 0;
gdjs.HomeCode.GDStart_9595TextObjects6.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects1.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects2.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects3.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects4.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects5.length = 0;
gdjs.HomeCode.GDCredits_9595TextObjects6.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects1.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects2.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects3.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects4.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects5.length = 0;
gdjs.HomeCode.GDCredits_9595DesignerObjects6.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects1.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects2.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects3.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects4.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects5.length = 0;
gdjs.HomeCode.GDCredits_9595ArtistObjects6.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects1.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects2.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects3.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects4.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects5.length = 0;
gdjs.HomeCode.GDCredits_9595MusicObjects6.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects1.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects2.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects3.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects4.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects5.length = 0;
gdjs.HomeCode.GDIris_9595Transition_9595CloseObjects6.length = 0;


return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
