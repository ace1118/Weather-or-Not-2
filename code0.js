gdjs.Weather_32Or_32NotCode = {};
gdjs.Weather_32Or_32NotCode.GDBGObjects1= [];
gdjs.Weather_32Or_32NotCode.GDBGObjects2= [];
gdjs.Weather_32Or_32NotCode.GDBGObjects3= [];
gdjs.Weather_32Or_32NotCode.GDtileObjects1= [];
gdjs.Weather_32Or_32NotCode.GDtileObjects2= [];
gdjs.Weather_32Or_32NotCode.GDtileObjects3= [];
gdjs.Weather_32Or_32NotCode.GDfloorObjects1= [];
gdjs.Weather_32Or_32NotCode.GDfloorObjects2= [];
gdjs.Weather_32Or_32NotCode.GDfloorObjects3= [];
gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1= [];
gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects2= [];
gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects3= [];
gdjs.Weather_32Or_32NotCode.GDtile_95newObjects1= [];
gdjs.Weather_32Or_32NotCode.GDtile_95newObjects2= [];
gdjs.Weather_32Or_32NotCode.GDtile_95newObjects3= [];
gdjs.Weather_32Or_32NotCode.GDfloor_95newObjects1= [];
gdjs.Weather_32Or_32NotCode.GDfloor_95newObjects2= [];
gdjs.Weather_32Or_32NotCode.GDfloor_95newObjects3= [];
gdjs.Weather_32Or_32NotCode.GDtreeObjects1= [];
gdjs.Weather_32Or_32NotCode.GDtreeObjects2= [];
gdjs.Weather_32Or_32NotCode.GDtreeObjects3= [];
gdjs.Weather_32Or_32NotCode.GDfenceObjects1= [];
gdjs.Weather_32Or_32NotCode.GDfenceObjects2= [];
gdjs.Weather_32Or_32NotCode.GDfenceObjects3= [];
gdjs.Weather_32Or_32NotCode.GDWON_95LogoObjects1= [];
gdjs.Weather_32Or_32NotCode.GDWON_95LogoObjects2= [];
gdjs.Weather_32Or_32NotCode.GDWON_95LogoObjects3= [];
gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects1= [];
gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects2= [];
gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects3= [];
gdjs.Weather_32Or_32NotCode.GDDoorObjects1= [];
gdjs.Weather_32Or_32NotCode.GDDoorObjects2= [];
gdjs.Weather_32Or_32NotCode.GDDoorObjects3= [];
gdjs.Weather_32Or_32NotCode.GDwindowObjects1= [];
gdjs.Weather_32Or_32NotCode.GDwindowObjects2= [];
gdjs.Weather_32Or_32NotCode.GDwindowObjects3= [];
gdjs.Weather_32Or_32NotCode.GDdoor_95activatorObjects1= [];
gdjs.Weather_32Or_32NotCode.GDdoor_95activatorObjects2= [];
gdjs.Weather_32Or_32NotCode.GDdoor_95activatorObjects3= [];
gdjs.Weather_32Or_32NotCode.GDkeyObjects1= [];
gdjs.Weather_32Or_32NotCode.GDkeyObjects2= [];
gdjs.Weather_32Or_32NotCode.GDkeyObjects3= [];
gdjs.Weather_32Or_32NotCode.GDNewObjectObjects1= [];
gdjs.Weather_32Or_32NotCode.GDNewObjectObjects2= [];
gdjs.Weather_32Or_32NotCode.GDNewObjectObjects3= [];
gdjs.Weather_32Or_32NotCode.GDdoor_95deactivatorObjects1= [];
gdjs.Weather_32Or_32NotCode.GDdoor_95deactivatorObjects2= [];
gdjs.Weather_32Or_32NotCode.GDdoor_95deactivatorObjects3= [];
gdjs.Weather_32Or_32NotCode.GDSAES_95BalitaObjects1= [];
gdjs.Weather_32Or_32NotCode.GDSAES_95BalitaObjects2= [];
gdjs.Weather_32Or_32NotCode.GDSAES_95BalitaObjects3= [];
gdjs.Weather_32Or_32NotCode.GDfallout2Objects1= [];
gdjs.Weather_32Or_32NotCode.GDfallout2Objects2= [];
gdjs.Weather_32Or_32NotCode.GDfallout2Objects3= [];
gdjs.Weather_32Or_32NotCode.GDfalloutObjects1= [];
gdjs.Weather_32Or_32NotCode.GDfalloutObjects2= [];
gdjs.Weather_32Or_32NotCode.GDfalloutObjects3= [];
gdjs.Weather_32Or_32NotCode.GDStartObjects1= [];
gdjs.Weather_32Or_32NotCode.GDStartObjects2= [];
gdjs.Weather_32Or_32NotCode.GDStartObjects3= [];
gdjs.Weather_32Or_32NotCode.GDNameObjects1= [];
gdjs.Weather_32Or_32NotCode.GDNameObjects2= [];
gdjs.Weather_32Or_32NotCode.GDNameObjects3= [];
gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects1= [];
gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects2= [];
gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects3= [];
gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects1= [];
gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects2= [];
gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects3= [];
gdjs.Weather_32Or_32NotCode.GDDoneObjects1= [];
gdjs.Weather_32Or_32NotCode.GDDoneObjects2= [];
gdjs.Weather_32Or_32NotCode.GDDoneObjects3= [];

gdjs.Weather_32Or_32NotCode.conditionTrue_0 = {val:false};
gdjs.Weather_32Or_32NotCode.condition0IsTrue_0 = {val:false};
gdjs.Weather_32Or_32NotCode.condition1IsTrue_0 = {val:false};
gdjs.Weather_32Or_32NotCode.condition2IsTrue_0 = {val:false};


gdjs.Weather_32Or_32NotCode.eventsList0 = function(runtimeScene) {

{


gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = false;
{
gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects2.length !== 0 ? gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects2[0] : null), true, "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects2.length === 0 ) ? 0 :gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects2[0].getPointX("")) + 300, 0.10), "", 0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), (( gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1.length === 0 ) ? 0 :gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1[0].getPointY("")), 0.10), "", 0);
}}

}


};gdjs.Weather_32Or_32NotCode.mapOfGDgdjs_46Weather_9532Or_9532NotCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Weather_32Or_32NotCode.GDStartObjects2});gdjs.Weather_32Or_32NotCode.mapOfGDgdjs_46Weather_9532Or_9532NotCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Weather_32Or_32NotCode.GDStartObjects2});gdjs.Weather_32Or_32NotCode.mapOfGDgdjs_46Weather_9532Or_9532NotCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Weather_32Or_32NotCode.GDStartObjects1});gdjs.Weather_32Or_32NotCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Weather_32Or_32NotCode.GDStartObjects2);

gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = false;
gdjs.Weather_32Or_32NotCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Weather_32Or_32NotCode.mapOfGDgdjs_46Weather_9532Or_9532NotCode_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32Or_32NotCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Weather_32Or_32NotCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Weather_32Or_32NotCode.GDStartObjects2);

gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = false;
{
gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Weather_32Or_32NotCode.mapOfGDgdjs_46Weather_9532Or_9532NotCode_46GDStartObjects2Objects, runtimeScene, true, false);
}if (gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Weather_32Or_32NotCode.GDStartObjects2 */
{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDStartObjects2[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Weather_32Or_32NotCode.GDStartObjects1);

gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = false;
{
gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Weather_32Or_32NotCode.mapOfGDgdjs_46Weather_9532Or_9532NotCode_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Weather_32Or_32NotCode.GDStartObjects1 */
{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDStartObjects1[i].setOpacity(155);
}
}}

}


};gdjs.Weather_32Or_32NotCode.mapOfGDgdjs_46Weather_9532Or_9532NotCode_46GDDoneObjects1Objects = Hashtable.newFrom({"Done": gdjs.Weather_32Or_32NotCode.GDDoneObjects1});gdjs.Weather_32Or_32NotCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedHatBoy"), gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1);

gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1.length;i<l;++i) {
    if ( gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = true;
        gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1[k] = gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1[i];
        ++k;
    }
}
gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1.length = k;}if (gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1 */
{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1[i].setAnimationName("Idle");
}
}}

}


{


gdjs.Weather_32Or_32NotCode.eventsList0(runtimeScene);
}


{


{
gdjs.copyArray(runtimeScene.getObjects("tile_darkgray"), gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects1);
{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects1[i].setColor("192;192;192");
}
}}

}


{


gdjs.Weather_32Or_32NotCode.eventsList1(runtimeScene);
}


{


gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = false;
{
gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Done"), gdjs.Weather_32Or_32NotCode.GDDoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Weather_32Or_32NotCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Weather_32Or_32NotCode.GDStartObjects1);
{gdjs.evtTools.sound.preloadSound(runtimeScene, "bg_music.mp3");
}{gdjs.evtTools.sound.playSound(runtimeScene, "bg_music.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDNameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDStartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDDoneObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDDoneObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Entry_name"), gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Weather_32Or_32NotCode.GDNameObjects1);
{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDNameObjects1[i].setString("Type Your Name: " + (( gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects1.length === 0 ) ? "" :gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects1[0].getString()));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Entry_name"), gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Weather_32Or_32NotCode.GDNameObjects1);
{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDNameObjects1[i].returnVariable(gdjs.Weather_32Or_32NotCode.GDNameObjects1[i].getVariables().getFromIndex(0)).setString("Name: " + (( gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects1.length === 0 ) ? "" :gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(11).setString((gdjs.RuntimeObject.getVariableString(((gdjs.Weather_32Or_32NotCode.GDNameObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Weather_32Or_32NotCode.GDNameObjects1[0].getVariables()).getFromIndex(0))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Done"), gdjs.Weather_32Or_32NotCode.GDDoneObjects1);

gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = false;
gdjs.Weather_32Or_32NotCode.condition1IsTrue_0.val = false;
{
gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Weather_32Or_32NotCode.mapOfGDgdjs_46Weather_9532Or_9532NotCode_46GDDoneObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val ) {
{
gdjs.Weather_32Or_32NotCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Weather_32Or_32NotCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Weather_32Or_32NotCode.GDDoneObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Weather_32Or_32NotCode.GDStartObjects1);
{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDStartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDDoneObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDDoneObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = false;
{
gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Weather_32Or_32NotCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Done"), gdjs.Weather_32Or_32NotCode.GDDoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Weather_32Or_32NotCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("click_here"), gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects1);
{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDNameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Weather_32Or_32NotCode.GDDoneObjects1.length ;i < len;++i) {
    gdjs.Weather_32Or_32NotCode.GDDoneObjects1[i].hide(false);
}
}}

}


};

gdjs.Weather_32Or_32NotCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Weather_32Or_32NotCode.GDBGObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDBGObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDBGObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDtileObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDtileObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDtileObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDfloorObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDfloorObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDfloorObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDRedHatBoyObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDtile_95newObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDtile_95newObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDtile_95newObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDfloor_95newObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDfloor_95newObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDfloor_95newObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDtreeObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDtreeObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDtreeObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDfenceObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDfenceObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDfenceObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDWON_95LogoObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDWON_95LogoObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDWON_95LogoObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDtile_95darkgrayObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDDoorObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDDoorObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDDoorObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDwindowObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDwindowObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDwindowObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDdoor_95activatorObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDdoor_95activatorObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDdoor_95activatorObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDkeyObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDkeyObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDkeyObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDNewObjectObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDNewObjectObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDNewObjectObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDdoor_95deactivatorObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDdoor_95deactivatorObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDdoor_95deactivatorObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDSAES_95BalitaObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDSAES_95BalitaObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDSAES_95BalitaObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDfallout2Objects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDfallout2Objects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDfallout2Objects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDfalloutObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDfalloutObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDfalloutObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDStartObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDStartObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDStartObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDNameObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDNameObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDNameObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDEntry_95nameObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDclick_95hereObjects3.length = 0;
gdjs.Weather_32Or_32NotCode.GDDoneObjects1.length = 0;
gdjs.Weather_32Or_32NotCode.GDDoneObjects2.length = 0;
gdjs.Weather_32Or_32NotCode.GDDoneObjects3.length = 0;

gdjs.Weather_32Or_32NotCode.eventsList2(runtimeScene);
return;

}

gdjs['Weather_32Or_32NotCode'] = gdjs.Weather_32Or_32NotCode;
