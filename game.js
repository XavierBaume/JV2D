kaboom({
    background: [0, 10, 50],
    width: 1400,
    height: 800,
    letterbox: true,
});

// Chargement de tous les personnages
loadSprite("player", "Assets/0_Personnages/Images/playerPrincipal.png", {
    sliceX: 23,
    sliceY: 1,
    anims: {
        idle: { from: 0, to: 9, loop: true, speed: 15 },
        jump: { from: 10, to: 13, loop: true, speed: 3 },
        runDroite: { from: 14, to: 22, loop: true, speed: 6 },
    },
});
loadSprite("scientist", "Assets/0_Personnages/Images/Scientist.png");
loadSprite("knight", "Assets/0_Personnages/Images/Knight.png", {
    sliceX: 18,
    anims: {
        attack: { from: 0, to: 6, speed: 8, loop: true },
        idle: { from: 7, to: 9, speed: 8, loop: true },
        walk: { from: 10, to: 17, speed: 8, loop: true },
    },
});
loadSprite("Craftman", "Assets/0_Personnages/Images/Craftman2.png", {
    sliceX: 4,
    anims: {
        idle: { from: 0, to: 3, speed: 8, loop: true },
    },
});

loadSprite("noble_happy", "Assets/0_Personnages/Images/noble_happy.png", {
    sliceX: 8,
    anims: {
        idle: { from: 0, to: 7, speed: 8, loop: true },
    },
});

loadSprite("noble_unhappy", "Assets/0_Personnages/Images/noble_unhappy.png", {
    sliceX: 6,
    anims: {
        idle: { from: 0, to: 5, speed: 3, loop: true },
    },
});

loadSprite("Monk", "Assets/0_Personnages/Images/Monk.png", {
    sliceX: 4,
    anims: {
        idle: { from: 0, to: 3, speed: 4, loop: true },
    },
});

// Chargement des images de l'Introduction
loadSprite("Cover", "Assets/1_Introduction/Images/cover.png");
loadSprite("Intro_Dialogue1", "Assets/1_Introduction/Images/Intro_Dialogue1.png");
loadSprite("Intro_Dialogue2", "Assets/1_Introduction/Images/Intro_Dialogue2.png");
loadSprite("Intro_Dialogue3", "Assets/1_Introduction/Images/Intro_Dialogue3.png");
loadSprite("Intro_Dialogue4", "Assets/1_Introduction/Images/Intro_Dialogue4.png");
loadSprite("sceneTimeMachine", "Assets/1_Introduction/Images/timeMachineScene.png");
loadSprite("panelTimeMachine", "Assets/1_Introduction/Images/timeMachine_Panel2.png");
loadSprite("InteractivePanel", "Assets/1_Introduction/Images/InterractivePanel.png");
loadSprite("background_panel", "Assets/1_Introduction/Images/background_panel.png");
loadSprite("Electric", "Assets/1_Introduction/Images/Eletric A-Sheet.png", {
    sliceX: 2,
    sliceY: 3,
    anims: {
        idle: { from: 0, to: 4, loop: true, speed: 9 },
    },
});
loadSprite("AnimTowerPanel","Assets/1_Introduction/Images/Gravity-Sheet.png", {
    sliceX: 4,
    sliceY: 5,
    anims: {
        idle: { from: 0, to: 19, loop: true, speed: 9 },
    },
});

loadSprite("AnimTowerPanel2","Assets/1_Introduction/Images/Gravity-Sheet.png", {
    sliceX: 4,
    sliceY: 5,
    anims: {
        idle: { from: 0, to: 19, loop: true, speed: 9 },
    },
});

// Chargement des images de l'époque médiévale
loadSprite("medBackground1", "Assets/2_Medieval/Images/medievalbackground1.png");
loadSprite("medBackground2", "Assets/2_Medieval/Images/medievalbackground2.png");
loadSprite("ground_tower","Assets/2_Medieval/Images/ground_tower.png");
loadSprite("platform", "Assets/2_Medieval/Images/platform.png");
loadSprite("medTower", "Assets/2_Medieval/Images/medTower_flou.png");
loadSprite("WallLeft", "Assets/2_Medieval/Images/WallLeft.png");
loadSprite("WallRight","Assets/2_Medieval/Images/WallRight.png")
loadSprite("medDoor", "Assets/2_Medieval/Images/medDoor.png");
loadSprite("monkChamber", "Assets/2_Medieval/Images/monkChamber.png");
loadSprite("Torch", "Assets/2_Medieval/Images/Torch_Animated.png", {
    sliceX: 4,
    sliceY: 2,
    anims: { idle: { from: 0, to: 5, loop: true, speed: 9 },},
});

// Chargement des images de l'époque de la Renaissance
loadSprite("background_intro_ren","Assets/3_Renaissance/Images/background_intro_ren.png")
loadSprite("renConstruction", "Assets/3_Renaissance/Images/RenObject/RenConstruction.png");
loadSprite("renTable", "Assets/3_Renaissance/Images/RenTable.png");
loadSprite("book", "Assets/3_Renaissance/Images/book.png", {
    sliceX: 9,
    sliceY: 1,
    anims: {
        idle: { from: 0, to: 0, loop: true, speed: 9 },
        pageTurned: { from: 1, to: 8, loop: false, speed: 10 },
    },
});

const themes = [
    { medieval: "MedCeiling_courb", renaissance: "RenCeiling_courb" },
    { medieval: "MedColumn_courb", renaissance: "RenColumn_courb" },
    { medieval: "MedDoor_courb", renaissance: "RenDoor_courb" },
    { medieval: "MedFirePlace_courb", renaissance: "RenFirePlace_courb" },
    { medieval: "MedFloor_courb", renaissance: "RenFloor_courb" },
    { medieval: "MedFurnishing_courb", renaissance: "RenFurnishing_courb" },
    { medieval: "MedOrnament_courb", renaissance: "RenOrnament_courb" },
    { medieval: "MedPainting_courb", renaissance: "RenPainting_courb" },
    { medieval: "MedStairs_courb", renaissance: "RenStairs_courb" },
    { medieval: "MedWindow_courb", renaissance: "RenWindow_courb" },
];

themes.forEach(theme => {
    loadSprite(theme.medieval, `Assets/3_Renaissance/Images/MedObjects/${theme.medieval}.png`);
    loadSprite(theme.renaissance, `Assets/3_Renaissance/Images/RenObject/${theme.renaissance}.png`);
});

loadSprite("denied", "Assets/3_Renaissance/Images/Denied.png");
loadSprite("Ren_MedResult", "Assets/3_Renaissance/Images/Ren_MedResult.png");
loadSprite("validation", "Assets/3_Renaissance/Images/Validation.png");
loadSprite("RenResult", "Assets/3_Renaissance/Images/RenResult.png");

//Chargement des ciméatiques
loadSprite("portal", "Assets/6_Transitions/Images/Dimensional_Portal.png", {
    sliceX: 3,
    sliceY: 2,
    anims: {
        idle: { from: 0, to: 5, loop: true, speed: 20 },
    },
});
loadSprite("TimeMachine_split1", "Assets/6_Transitions/Images/TimeMachine_split1.png");
loadSprite("TimeMachine_split2", "Assets/6_Transitions/Images/TimeMachine_split2.png");


// Chargement des musiques
// 1. Introduction
loadSound("musique_intro", "Assets/1_Introduction/Sons/music_intro.mp3")
loadSound("music_TM_scene", "Assets/1_Introduction/Sons/music_TM_scene.mp3")
loadSound("music_panel", "Assets/1_Introduction/Sons/music_panel.mp3")
loadSound("music_dr_tempus","Assets/1_Introduction/Sons/music_dr_tempus.wav")
// 2. Moyen-Âge
loadSound("music_intro_med","Assets/2_Medieval/Sons/music_intro_med.mp3")
loadSound("music_castle_in_fire","Assets/2_Medieval/Sons/music_castle_in_fire.mp3")
loadSound("music_tower","Assets/2_Medieval/Sons/music_tower.mp3")
loadSound("music_crac_platform","Assets/2_Medieval/Sons/music_crac_platform.mp3")
loadSound("music_destroy_platform","Assets/2_Medieval/Sons/music_destroy_platform.mp3")
loadSound("monk_abbey_song","Assets/2_Medieval/Sons/monk_abbey_song.mp3")
loadSound("door_opening","Assets/2_Medieval/Sons/door_opening.mp3")

// 3. Renaissance
loadSound("music_intro_dialogue","Assets/3_Renaissance/Sons/music_intro_dialogue_cut.mp3")
loadSound("music_intro_background","Assets/3_Renaissance/Sons/music_intro_background.mp3") 
loadSound("music_craftman","Assets/3_Renaissance/Sons/music_craftman.wav")
loadSound("music_page_turn","Assets/3_Renaissance/Sons/music_page_turn.mp3")
loadSound("music_game_ren","Assets/3_Renaissance/Sons/music_game_ren.mp3")
loadSound("ren_market","Assets/3_Renaissance/Sons/ren_market.mp3")
loadSound("music_noblle_disagree","Assets/3_Renaissance/Sons/music_noblle_disagree.wav")
loadSound("unhappy_music","Assets/3_Renaissance/Sons/unhappy_music.mp3")
loadSound("music_noble_agree","Assets/3_Renaissance/Sons/music_noble_agree.wav")
loadSound("music_happy","Assets/3_Renaissance/Sons/music_happy.mp3")

// 6. Transition 
loadSound("music_time_machine_processing","Assets/1_Introduction/Sons/music_time_machine_processing.mp3")
loadSound("MusicPortail_in","Assets/6_Transitions/Sons/MusicPortail_in.mp3")
loadSound("MusicPortail_out","Assets/6_Transitions/Sons/MusicPortail_out.mp3")

// Animation Cover

let playerExited = false; 

// Lancement des musiques et sons

let isMusicPlaying = false;

// 1. Introduction 
let musicIntro;
let music_TM_scene
let music_panel

// 2. Moyen-Âge
let music_intro_med
let music_castle_in_fire
let music_tower
let monk_abbey_song
let door_opening

// 3. Renaissance
let ren_market
let music_intro_dialogue
let music_intro_background
let music_craftman
let music_page_turn
let music_game_ren
let music_noble_agree
let music_happy
let music_noblle_disagree
let unhappy_music

// 6. Transition
let music_time_machine_processing
let MusicPortail_in
let MusicPortail_out

//Fonctions cinématiques

function playCinematic1(nextScene) {

    // Ajout de la musique au début de la scène
    musicPortail_in = play("MusicPortail_in", {
        volume: 0.5,
        loop: true,
    });
    let isMusicPlaying = true;

    // Add background first to ensure it is behind other sprites
    add([
        sprite("sceneTimeMachine", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    const portal = add([
        sprite("portal"),
        pos(width() / 2 + 240, height() / 2 +180),
        anchor("center"),
        area(),
        scale(6),
        opacity(0), // Initial opacity set to 0 for the portal
    ]);


    const timeMachine1 = add([
        sprite("TimeMachine_split1"),
        pos((width() / 2) - 400, (height() / 2) + 170), // Positioned to the left of the portal
        anchor("center"),
        area(),
        scale(2),
    ]);

    const timeMachine2 = add([
        sprite("TimeMachine_split2"),
        pos((width() / 2) + 400, (height() / 2) + 170), // Positioned to the right of the portal
        anchor("center"),
        area(),
        scale(2),
    ]);

    const interactivePanel = add([
        sprite("InteractivePanel"), // White square of 50x50 pixels
        pos((width() / 2) - 15, (height() / 2) + 200), // Center position on the screen
        area(),
        anchor("center"),
        scale(0.4), // Scale it to make it visible
        "interactive",
    ]);

    const animTowerPanel = add([
        sprite("AnimTowerPanel", { anim: "idle" }),
        pos((width() / 2+20), height() / 2 + 130),
        anchor("center"),
        scale(1),
        area(),
    ]);

    const animTowerPanel2 = add([
        sprite("AnimTowerPanel2", { anim: "idle" }),
        pos((width() / 2-50), height() / 2 + 250),
        anchor("center"),
        scale(1),
        area(),
    ]);

    const FLOOR_HEIGHT = 120;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0), // Transparent floor
    ]);

    //

    // Progressive appearance of the portal
    let portalFadeDuration = 1; // Duration of the fade in seconds
    let portalFadeIncrement = 1 / (portalFadeDuration * 60); // Assuming 60 FPS

    portal.onUpdate(() => {
        if (portal.opacity < 1) {
            portal.opacity = Math.min(portal.opacity + portalFadeIncrement, 1);
        }
    });

    portal.play("idle");

    const player = add([
        sprite("player"),
        pos((width() / 2), height() / 2+220), // Position initiale du joueur à gauche du portail
        anchor("center"),
        scale(2),
        area(),
        body(),
        opacity(1), // Initial opacity set to 1 for the player
    ]);

    player.play("runDroite");

    const targetPosX = width() / 2 + 240;
    const moveDuration = 0.5; // Move duration in seconds
    const moveSpeed = (targetPosX - player.pos.x) / moveDuration;

    player.onUpdate(() => {
        if (player.pos.x < targetPosX) {
            player.move(moveSpeed, 0);
        } else {
            player.pos = vec2(targetPosX, height() / 2+220);
            player.play("idle");

            // Progressive disappearance of the player
            let playerFadeDuration = 1; // Duration of the fade in seconds
            let playerFadeIncrement = 1 / (playerFadeDuration * 60); // Assuming 60 FPS

            player.onUpdate(() => {
                if (player.opacity > 0) {
                    player.opacity = Math.max(player.opacity - playerFadeIncrement, 0);
                } else {
                    player.destroy();
                }
            });

            wait(playerFadeDuration, () => {
                // Wait 1 second before starting the portal fade-out
                wait(1, () => {
                    portal.onUpdate(() => {
                        if (portal.opacity > 0) {
                            portal.opacity = Math.max(portal.opacity - portalFadeIncrement, 0);
                        }
                    });

                    wait(portalFadeDuration, () => {
                        portal.destroy();
                        // Arrêt de la musique avant de passer à la prochaine scène
                        if (isMusicPlaying) {
                            musicPortail_in.paused = true;
                            isMusicPlaying = false;
                        }


                        // Wait an additional second to ensure the disappearance is visible
                        wait(1, () => {
                            initializeHourglassAnimation1();
                            go(nextScene);
                        });
                    });
                });
            });
        }
    });
}

// Scène de cinématique générique
scene("cinematic1", ({ nextScene }) => {
    playCinematic1(nextScene);
});
//2
function playCinematic2(nextScene) {
    // Musique
    MusicPortail_out = play("MusicPortail_out", {
        volume: 0.5,
        loop: false,
    });
    let isMusicPlaying = true;

    nextScene = "timeMachineChamber2"; // Modification pour rediriger vers la scène "timeMachineChamber"
    
    add([
        sprite("sceneTimeMachine", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    const portal = add([
        sprite("portal"),
        pos(width() / 2 - 260, height() / 2 + 170),
        anchor("center"),
        area(),
        scale(6),
        opacity(0),
    ]);

    const timeMachine1 = add([
        sprite("TimeMachine_split1"),
        pos((width() / 2) - 400, (height() / 2) + 170), // Positioned to the left of the portal
        anchor("center"),
        area(),
        scale(2),
    ]);

    const timeMachine2 = add([
        sprite("TimeMachine_split2"),
        pos((width() / 2) + 400, (height() / 2) + 170), // Positioned to the right of the portal
        anchor("center"),
        area(),
        scale(2),
    ]);

    const interactivePanel = add([
        sprite("InteractivePanel"), // White square of 50x50 pixels
        pos((width() / 2) - 15, (height() / 2) + 200), // Center position on the screen
        area(),
        anchor("center"),
        scale(0.4), // Scale it to make it visible
        "interactive",
    ]);

    const animTowerPanel = add([
        sprite("AnimTowerPanel", { anim: "idle" }),
        pos((width() / 2+20), height() / 2 + 130),
        anchor("center"),
        scale(1),
        area(),
    ]);

    const animTowerPanel2 = add([
        sprite("AnimTowerPanel2", { anim: "idle" }),
        pos((width() / 2-50), height() / 2 + 250),
        anchor("center"),
        scale(1),
        area(),
    ]);

    const FLOOR_HEIGHT = 120;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0), // Transparent floor
    ]);

    let portalFadeDuration = 1;
    let portalFadeIncrement = 1 / (portalFadeDuration * 60);

    portal.onUpdate(() => {
        if (portal.opacity < 1) {
            portal.opacity = Math.min(portal.opacity + portalFadeIncrement, 1);
        }
    });

    portal.play("idle");

    wait(1, () => {
        const player = add([
            sprite("player"),
            pos((width() / 2 - 260), height() / 2 + 220),
            anchor("center"),
            area(),
            body(),
            scale(2),
            opacity(0),
        ]);

        let fadeDuration = 1;
        let fadeIncrement = 1 / (fadeDuration * 60);

        player.onUpdate(() => {
            if (player.opacity < 1) {
                player.opacity = Math.min(player.opacity + fadeIncrement, 1);
            }
        });

        wait(fadeDuration, () => {
            player.play("runDroite");
            const moveDistance = 160;
            const moveDuration = 0.8;
            const moveSpeed = moveDistance / moveDuration;

            player.onUpdate(() => {
                if (player.curAnim() !== "idle" && player.pos.x < (width() / 2) + moveDistance) {
                    player.move(moveSpeed, 0);
                }
            });

            wait(moveDuration, () => {
                player.stop();
                player.play("idle");
                wait(1, () => {
                    // Arrêter la musique avant de changer de scène
                    if (isMusicPlaying) {
                        MusicPortail_out.paused=true;
                        isMusicPlaying = false;
                    }
                    go(nextScene);
                });
            });
        });
    });
}

function initializeHourglassAnimation1() {
    return new Promise((resolve) => {
        
        // Démarre la musique
        music_time_machine_processing = play("music_time_machine_processing", {
            volume: 0.5,
            loop: false,
        });
        isMusicPlaying = true;
        

        loadSprite("hourglass1", "Assets/6_Transitions/Images/Inverted_hourglass.png", {
            sliceX: 27,
            anims: {
                spin: {
                    from: 0,
                    to: 26,
                    loop: false,
                    speed: 10,
                },
            },
        }).then(() => {
            const hourglass = add([
                sprite("hourglass1"),
                pos(center().add(0, -50)),
                scale(4),
                anchor("center"),
            ]);

            let hourglassLoops = 0;
            let loadingStopped = false;

            hourglass.on("animEnd", (anim) => {
                if (anim === "spin") {
                    hourglassLoops++;
                    if (hourglassLoops < 2) {
                        hourglass.play("spin");
                    } else {
                        loadingStopped = true;
                        
                        // Arrête la musique une fois l'animation terminée
                        if (isMusicPlaying) {
                            music_time_machine_processing.paused = true;
                            isMusicPlaying = false;
                        }
                        resolve();
                    }
                }
            });

            hourglass.play("spin");

            onDraw(() => {
                if (!loadingStopped) {
                    drawText({
                        text: "Processus de rétrospective temporelle enclenché" + ".".repeat(wave(1, 4, time() * 12)),
                        font: "monospace",
                        size: 24,
                        anchor: "center",
                        pos: center().add(0, 70),
                    });
                }
            });
        });

        load(new Promise((res) => {
            setTimeout(res, 1000);
        }));
        load(new Promise((res) => {
            setTimeout(res, 2000);
        }));
        load(new Promise((res) => {
            setTimeout(res, 3000);
        }));
    });
}
// Loading Sablier 2
function initializeHourglassAnimation2() {
    return new Promise((resolve) => {
        // Démarrer la musique
        music_time_machine_processing = play("music_time_machine_processing", {
            volume: 0.5,
            loop: false,
        });
        isMusicPlaying = true;

        loadSprite("hourglass2", "Assets/6_Transitions/Images/hourglass.png", {
            sliceX: 25,
            anims: {
                spin: {
                    from: 0,
                    to: 24,
                    loop: false,
                    speed: 10,
                },
            },
        }).then(() => {
            const hourglass = add([
                sprite("hourglass2"),
                pos(center().add(0, -50)),
                scale(4),
                anchor("center"),
            ]);

            let hourglassLoops = 0;
            let loadingStopped = false;

            hourglass.on("animEnd", (anim) => {
                if (anim === "spin") {
                    hourglassLoops++;
                    if (hourglassLoops < 2) {
                        hourglass.play("spin");
                    } else {
                        loadingStopped = true;
                        
                        // Arrêter la musique et résoudre la promesse
                        if (isMusicPlaying && music_time_machine_processing) {
                            music_time_machine_processing.paused = true;
                            isMusicPlaying = false;
                        }
                         resolve(); // Resolve the promise
                    }
                }
            });

            hourglass.play("spin");

            onDraw(() => {
                if (!loadingStopped) {
                    drawText({
                        text: "Processus de retour enclenché" + ".".repeat(wave(1, 4, time() * 12)),
                        font: "monospace",
                        size: 24,
                        anchor: "center",
                        pos: center().add(0, 70),
                    });
                }
            });
        });

         // Simulation de chargements avec les promesses
        load(new Promise((res) => {
            setTimeout(res, 1000);
        }));
        load(new Promise((res) => {
            setTimeout(res, 2000);
        }));
        load(new Promise((res) => {
            setTimeout(res, 3000);
        }));

    });
}

function playCinematicNoMachine1(nextScene) {
    // Démarrer la musique si elle n'est pas déjà en cours
    if (!isMusicPlaying) {
        MusicPortail_out = play("MusicPortail_out", {
            volume: 0.5,
            loop: false,
        });
        isMusicPlaying = true;
    }


    const portal = add([
        sprite("portal"),
        pos(width() / 2, height() / 2+250),
        anchor("center"),
        area(),
        scale(3),
        opacity(0),
    ]);


    let portalFadeDuration = 1;
    let portalFadeIncrement = 1 / (portalFadeDuration * 60); 


    portal.onUpdate(() => {
        if (portal.opacity < 1) {
            portal.opacity = Math.min(portal.opacity + portalFadeIncrement, 1);
        }
    });


    portal.play("idle");

    wait(1, () => {
        const player = add([
            sprite("player"),
            pos((width() / 2), height() / 2+270),
            anchor("center"),
            area(),
            body(),
            opacity(0),
        ]);


        let fadeDuration = 1;
        let fadeIncrement = 1 / (fadeDuration * 60);


        player.onUpdate(() => {
            if (player.opacity < 1) {
                player.opacity = Math.min(player.opacity + fadeIncrement, 1);
            }
        });

        wait(fadeDuration, () => {
            player.play("runDroite");
            const moveDistance = 100;
            const moveDuration = 0.5; 
            const moveSpeed = moveDistance / moveDuration;

           
            player.onUpdate(() => {
                if (player.pos.x < (width() / 2) + moveDistance) {
                    player.move(moveSpeed, 0);
                } else {
                    player.play("idle");
                }
            });

            wait(moveDuration, () => {
                player.stop();
                player.play("idle");
                wait(1, () => {
                    // Arrêter la musique avant de changer de scène
                     if (MusicPortail_in) {
                         MusicPortail_in.paused = true;
                         isMusicPlaying = false;
                     }
                    go(nextScene);
                });
            });
        });
    });
}

function playCinematicNoMachine2(nextScene) {
    // Démarre la musique si elle n'est pas déjà en cours
    if (!isMusicPlaying) {
      MusicPortail_in = play("MusicPortail_in", {
          volume: 0.5,
          loop: false,
      });
      isMusicPlaying = true;
    }


    const portal = add([
        sprite("portal"),
        pos(width() / 2 + 400, height() / 2 + 200),
        anchor("center"),
        area(),
        scale(12),
        opacity(0),
    ]);

    let portalFadeDuration = 1;
    let portalFadeIncrement = 1 / (portalFadeDuration * 60);

    portal.onUpdate(() => {
        if (portal.opacity < 1) {
            portal.opacity = Math.min(portal.opacity + portalFadeIncrement, 1);
        }
    });

    portal.play("idle");

    const player = add([
        sprite("player"),
        pos((width() / 2) - 100, height() / 2 + 200),
        anchor("center"),
        area(),
        body(),
        scale(5),
        opacity(1),
    ]);

    player.play("runDroite");

    const moveSpeed = 400;

    player.onUpdate(() => {
        if (player.pos.x < portal.pos.x) {
            player.move(moveSpeed, 0);
        } else if (player.pos.x >= portal.pos.x && player.pos.y < portal.pos.y) {
            player.move(0, moveSpeed);
        } else {
            player.pos = portal.pos;
            player.play("idle");

            let playerFadeDuration = 1;
            let playerFadeIncrement = 1 / (playerFadeDuration * 60);

            player.onUpdate(() => {
                if (player.opacity > 0) {
                    player.opacity = Math.max(player.opacity - playerFadeIncrement, 0);
                } else {
                    player.destroy();
                }
            });

            wait(playerFadeDuration, () => {
                wait(1, () => {
                    portal.onUpdate(() => {
                        if (portal.opacity > 0) {
                            portal.opacity = Math.max(portal.opacity - portalFadeIncrement, 0);
                        }
                    });

                    wait(portalFadeDuration, () => {
                        portal.destroy();

                        wait(1, () => {
                           //Arrêt de la musique quand la scène se termine.
                            if (isMusicPlaying) {
                                MusicPortail_in.paused = true;
                                isMusicPlaying = false;
                             }
                            go(nextScene);
                        });
                    });
                });
            });
        }
    });
}

function playerMovement(player, JUMP_FORCE, SPEED, width) {
    let animEnCours = false;

    onKeyPress("space", () => {
        if (player.isGrounded()) {
            player.play("jump");
            player.jump(JUMP_FORCE);
        }
    });

    onKeyRelease("space", () => {
        player.play("idle");
        animEnCours = false;
    });

    onKeyDown("left", () => {
        if (!animEnCours) {
            player.play("runDroite");
            player.scale.x = -2;
            animEnCours = true;
        }
        player.move(-SPEED, 0);
        if (player.pos.x < 0) {
            player.pos.x = width();
        }
    });

    onKeyRelease("left", () => {
        player.play("idle");
        animEnCours = false;
    });

    onKeyDown("right", () => {
        if (!animEnCours) {
            player.play("runDroite");
            player.scale.x = 2;
            animEnCours = true;
        }
        player.move(SPEED, 0);
        if (player.pos.x > width()) {
            player.pos.x = 0;
        }
    });

    onKeyRelease("right", () => {
        player.play("idle");
        animEnCours = false;
    });
}

// Shader lorsque le joueur est sur les plateformes 
loadShader("invert", null, `
    uniform float u_time;
    
    vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
        vec4 c = def_frag();
        float frequency = 2.0; // Réduire la fréquence pour moins de tremblements
        float amplitude = 0.5; // Réduire l'amplitude pour moins d'effet
        float t = (sin(u_time * frequency) * amplitude + 1.0) / 2.0;
        return mix(c, vec4(1.0 - c.r, 1.0 - c.g, 1.0 - c.b, c.a), t);
    }
    `);

    function TowerScene() {
        // Musique
        music_tower = play("music_tower", {
            volume: 0.5,
            loop: true,
        });
        let isMusicPlaying = true;
    
        add([
            sprite("medTower", { width: width(), height: height() }),
            fixed(true),
        ]);
    
        const wallHeight = height() - 200;
        let torches = [];
    
        function addWallLeft(yPos) {
            const wallLeft = add([
                sprite("WallLeft"),
                pos(-400, yPos),
                anchor("left"),
                area(),
                "wallLeft"
            ]);
    
            const torchRotation = 12;
            const offsetX = 210;  // Décalage horizontal pour la torche gauche
            const offsetY = 300;   // Décalage vertical pour la torche gauche
            
            const torch = add([
                sprite("Torch", { anim: "idle" }),
                pos(wallLeft.pos.x + wallLeft.width / 2 + offsetX, wallLeft.pos.y + wallLeft.height / 2 + offsetY),
                anchor("center"),
                scale(3),
                rotate(torchRotation),
                z(1),
                "torchLeft"
            ]);
            torches.push({ wall: wallLeft, torch: torch, side: "left", offsetX: offsetX, offsetY: offsetY });
        }
    
        function addWallRight(yPos) {
            const wallRight = add([
                sprite("WallRight"),
                pos(width() + 400, yPos),
                anchor("right"),
                area(),
                "wallRight"
            ]);
    
            const torchRotation = 12;
            const offsetX = -210;  // Décalage horizontal pour la torche droite
            const offsetY = 300;   // Décalage vertical pour la torche droite
    
            const torch = add([
                sprite("Torch", { anim: "idle" }),
                 pos(wallRight.pos.x - wallRight.width / 2 + offsetX, wallRight.pos.y + wallRight.height / 2 + offsetY),
                anchor("center"),
                scale(3),
                rotate(-torchRotation),
                z(1),
                "torchRight"
            ]);
            torches.push({ wall: wallRight, torch: torch, side: "right", offsetX: offsetX, offsetY: offsetY });
        }
    
    
         const playerStartPos = vec2(center().x, height() - 100);
    
        // Generation des murs
        function generateWallsBasedOnPlayer(playerStartY){
            const startWallIndex = Math.floor(playerStartY / wallHeight);
        
            for (let i = startWallIndex - 3; i < startWallIndex + 4; i++) {
                const yPos = (height() + (i * -wallHeight)) + wallHeight / 2 ; // Ajout de wallHeight / 2
                addWallLeft(yPos);
                addWallRight(yPos);
            }
        }
    
        generateWallsBasedOnPlayer(playerStartPos.y);
    
        const platforms = [];
        const MAX_PLATFORMS = 10;
    
        add([
            rect(width(), 6),
            outline(4),
            area(),
            pos(0, height() - 48),
            body({ isStatic: true }),
          ]);
          
          const nb_tours = 10;
          const espacement = 100; // Espacement entre les tours (ajuster si nécessaire)
          const position_depart_x = width() / 2 - (espacement * (nb_tours - 1)) / 2; // Position x de la première tour

        for (let i = 0; i < nb_tours; i++) {
        add([
            sprite("ground_tower"),
            scale(1.25),
            pos(position_depart_x + espacement * i, height() - 48 + 140), // Position calculée pour chaque tour
            area(),
            anchor("center"), // Ancre du sprite au centre (facilite le positionnement)
        ]);
        }
    
        const MIN_VERTICAL_DISTANCE = 150;
        const MAX_VERTICAL_DISTANCE = 250;
        const MIN_HORIZONTAL_DISTANCE = 150;
        const MAX_HORIZONTAL_DISTANCE = 250;
    
        function checkOverlap(rect1, rect2) {
            return !(
                rect1.x > rect2.x + rect2.width ||
                rect1.x + rect1.width < rect2.x ||
                rect1.y > rect2.y + rect2.height ||
                rect1.y + rect1.height < rect2.y
            );
        }
    
        function generatePlatform(platformWidth, platformHeight) {
            if (platforms.length >= MAX_PLATFORMS) {
                return;
            }
    
            let newPlatform;
            let overlap;
            let yPos = height() - 100;
    
            if (platforms.length > 0) {
                yPos = platforms[platforms.length - 1].y - rand(MIN_VERTICAL_DISTANCE, MAX_VERTICAL_DISTANCE);
            }
    
            do {
                overlap = false;
                const xPos = platforms.length > 0 ?
                    rand(
                        Math.max(80, platforms[platforms.length - 1].x - MAX_HORIZONTAL_DISTANCE),
                        Math.min(width() - platformWidth - 80, platforms[platforms.length - 1].x + MAX_HORIZONTAL_DISTANCE)
                    ) :
                    rand(50, width() - platformWidth - 50);
    
                if (platforms.length > 0) {
                    if (Math.abs(xPos - platforms[platforms.length - 1].x) < MIN_HORIZONTAL_DISTANCE) {
                        overlap = true;
                        continue;
                    }
                }
    
                newPlatform = {
                    x: xPos,
                    y: yPos,
                    width: platformWidth,
                    height: platformHeight,
                };
    
                for (let platform of platforms) {
                    if (checkOverlap(newPlatform, platform)) {
                        overlap = true;
                        break;
                    }
                }
            } while (overlap);
    
            platforms.push(newPlatform);
            const isLastPlatform = platforms.length === MAX_PLATFORMS;
    
            const platformObj = add([
                sprite("platform"),
                pos(newPlatform.x, newPlatform.y),
                area(),
                scale(platformWidth / 500, platformHeight / 180),
                body({ isStatic: true }),
                "platform",
                {
                    playerOnPlatform: false,
                    timer: 0,
                    isLastPlatform: isLastPlatform,
                    soundPlayed: false,
                    musicPlaying: false,
                }
            ]);
    
            platformObj.onUpdate(() => {
                if (platformObj.playerOnPlatform) {
                    if (!platformObj.soundPlayed) {
                        play("music_crac_platform", { volume: 0.3 });
                        platformObj.soundPlayed = true;
                        platformObj.musicPlaying = true;
                    }
                    platformObj.timer += dt();
                    if (platformObj.timer > 3) {
                        play("music_destroy_platform", { volume: 0.5 })
                        destroy(platformObj);
                    }
                } else {
                    platformObj.timer = 0;
                    if (platformObj.musicPlaying) {
                        stop("music_crac_platform");
                        platformObj.musicPlaying = false;
                    }
                    platformObj.soundPlayed = false;
                }
            });
    
            if (isLastPlatform) {
                add([
                    sprite("medDoor", {
                        width: 80,
                        height: 100,
                    }),
                    pos(newPlatform.x + (platformWidth / 2), newPlatform.y - 50),
                    anchor("center")
                ]);
            }
        }
    
        loop(2, () => {
            if (platforms.length < MAX_PLATFORMS) {
                generatePlatform(150, 30);
            }
        });
    
        setGravity(1600);
    
        const SPEED = 320;
        const JUMP_FORCE = 1000;
    
        const player = add([
            sprite("player"),
            pos(playerStartPos), // Utiliser la position de départ
            area(),
            body(),
            scale(2),
            "player",
            {isTouchingPlatform: false}
        ]);
    
        let animEnCours = false;
    
        player.play("idle");
    
        playerMovement(player, JUMP_FORCE, SPEED, width);
    
        // Création de la case et du texte pour l'instruction
        const instructionBox = add([
            rect(width() - 400, 60, {radius: 20}), // Ajustement de la taille et des marges
            pos(center().x, 200),
            anchor("center"),
            color(255,255,255),
            outline(4),
        ]);
    
        const instructionText = add([
            text("Appuie sur ENTER pour relancer la partie.", { size: 24, width: width() - 60, align: "center" }), // Ajustement de la taille et des marges
            pos(instructionBox.pos), // Positionne le texte au centre de la case
            anchor("center"),
            color(0,0,0),
        ]);
    
        onKeyPress("space", () => {
            destroy(instructionBox); // Destruction de la case
            destroy(instructionText); // Destruction du texte
        });
    
        onKeyPress("enter", () => {
            go("Tower");
        });
    
        onCollide("player", "platform", (p, plat) => {
            plat.playerOnPlatform = true;
            plat.use(shader("invert"));
            player.isTouchingPlatform = true;
            if (plat.isLastPlatform) {
                music_tower.paused = true
                isMusicPlaying = false;
                go("monkChamber");
            }
        });
    
        onCollideEnd("player", "platform", (p, plat) => {
            plat.playerOnPlatform = false;
            plat.use(shader(null));
        });
        
         // Ajouter cette variable pour la position cible de la caméra
        let targetCamPos = vec2(0,0);
        const cameraSmoothSpeed = 8; // Adjust this value for smoothness
    
    
        player.onUpdate(() => {
              // Calculer la position cible de la caméra avec les limites
              let camX = Math.max(300, Math.min(player.pos.x, width() - 300));
              let camY = player.pos.y - 130;
    
             //  Mettre à jour la position cible de la caméra
            targetCamPos = vec2(camX, camY);
    
            //Lissage de la caméra : Nouvelle position de la caméra en fonction de la position cible
            const newCamPos = camPos().lerp(targetCamPos, cameraSmoothSpeed * dt())
            camPos(newCamPos);
          
            // Vérifier si le joueur est tombé en dehors de l'écran
            if (player.pos.y > height()) {
                go("Tower");
                if (isMusicPlaying == true){
                    music_tower.paused = true
                }
            }
             // Stop la musique si le joueur n'est plus sur une plateforme
             if (!player.isTouchingPlatform){
                stop("music_crac_platform");
             }
    
            // Limiter la position du joueur sur l'axe des x
            if (player.pos.x < 80) {
                player.pos.x = 80;
            } else if (player.pos.x > width() - 80) {
                player.pos.x = width() - 80;
            }
            player.isTouchingPlatform = false; // Réinitialiser après la vérification
        });
    
       onUpdate(() => {
            for(const torchData of torches){
                const {wall, torch, side, offsetX, offsetY} = torchData;
                if(side === "left"){
                    torch.pos.x = wall.pos.x + wall.width / 2 + offsetX;
                    torch.pos.y = wall.pos.y + wall.height / 2 + offsetY;
                } else {
                    torch.pos.x = wall.pos.x - wall.width / 2 + offsetX;
                    torch.pos.y = wall.pos.y + wall.height / 2 + offsetY;
                }
            }
        })
    }

    scene("cover", () => {

        // Lancer la musique si elle n'est pas déjà en cours de lecture
    musicIntro = play("musique_intro", {
        volume: 0.5,
        loop: true,
    });
    isMusicPlaying = true;

      playerExited = false; // Réinitialiser playerExited au début de la scène
    
      add([
        sprite("Cover", {
          width: width(),
          height: height(),
          fixed: true,
        }),
      ]);
    
      const coverText = "Presse ESPACE pour jouer";
      const textboxWidth = 400;
    
      const textbox = add([
        rect(textboxWidth, 120, { radius: 32 }),
        pos(center().x, center().y - 300),
        anchor("center"),
        outline(4),
        color(255, 255, 255),
      ]);
    
      add([
        text(coverText, {
          size: 32,
          width: textboxWidth - 20,
          wrap: true,
          align: 'center',
        }),
        pos(center().x, center().y -300),
        anchor("center"),
        color(0, 0, 0),
      ]);
    
      const player = add([
        sprite("player"),
        pos(0, height() / 2 + 120),
        anchor("center"),
        scale(4),
        area(),
        body(),
        opacity(1),
      ]);
    
      player.play("runDroite");
    
      const exitMoveSpeed = 700;
    
      player.onUpdate(() => {
        player.move(exitMoveSpeed, 0);
        if (player.pos.x > width()) {
            // Réinitialise la position du joueur
            player.pos.x = -player.width; // Met le joueur hors de l'écran à gauche
          playerExited = true;
        }
      });
    
      onKeyPress("space", () => {
        if (playerExited) {
          go("introduction");
        }
      });
    });
/// Scène d'introduction
scene("introduction", () => {
    // Liste des dialogues avec leurs sprites associés
    const dialogs = [
        {
            sprite: sprite("Intro_Dialogue1", { width: width(), height: height(), fixed: true }),
            text: "Bienvenue dans PALIMPSESTE, un jeu où tu incarneras un historien.ne dont la mission est de restaurer un site ancien à travers les époques!",
        },
        {
            sprite: sprite("Intro_Dialogue2", { width: width(), height: height(), fixed: true }),
            text: "Les plus grands scientifiques de ton temps ont créé un objet sans commune mesure : une machine à remonter le temps.",
        },
        {
            sprite: sprite("Intro_Dialogue2", { width: width(), height: height(), fixed: true }),
            text: "A l'aide de cette invention, tu seras amené à voyager à travers les âges afin de découvrir les différentes phases de construction du site historique.",
        },
        {
            sprite: sprite("Intro_Dialogue3", { width: width(), height: height(), fixed: true }),
            text: "De longues et pénibles discussions ont eu lieu entre scientifiques et politiciens...",
        },
        {
            sprite: sprite("Intro_Dialogue4", { width: width(), height: height(), fixed: true }),
            text: "Mais TU as été choisi pour relever ce défi! Bonne chance pour ce voyage transpériodique...",
        },
    ];

    // Index du dialogue actuel
    let currentDialog = 0;

    const dialogDisplay = add([
        dialogs[currentDialog].sprite,
    ]);

    function createTextbox() {
        return add([
            rect(1200, 150, { radius: 32 }),
            pos(center().x, height() - 80),
            anchor("center"),
            outline(4),
            color(255, 255, 255),
        ]);
    }

    const textbox = createTextbox();

    const dialogText = add([
        text(dialogs[currentDialog].text, { size: 32, width: 1100, wrap: true }),
        pos(center().x, height() - 80),
        anchor("center"),
        color(0, 0, 0),
    ]);

    function updateDialogue() {
        dialogDisplay.use(dialogs[currentDialog].sprite);
        dialogText.text = dialogs[currentDialog].text;
    }

    onKeyPress("space", () => {
        currentDialog++;
        if (currentDialog < dialogs.length) {
            updateDialogue();
        } else {
            // Arrêter la musique en quittant la scène
            if (musicIntro && isMusicPlaying) {
                musicIntro.paused = true;
                isMusicPlaying = false;
            }
            go("cinematicTimeMachineChamber");
        }
    });

    // Initialiser avec le premier dialogue
    updateDialogue();
});

scene("cinematicTimeMachineChamber", () => {
    music_TM_scene = play("music_TM_scene", {
        volume: 0.5,
        loop: true,
    });
    isMusicPlaying = true;
    // Ajouter dialogue avec scientifique
    add([
        sprite("sceneTimeMachine", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    const timeMachine1 = add([
        sprite("TimeMachine_split1"),
        pos((width() / 2) - 400, (height() / 2) + 170), // Positioned to the left of the portal
        anchor("center"),
        area(),
        scale(2),
    ]);

    const timeMachine2 = add([
        sprite("TimeMachine_split2"),
        pos((width() / 2) + 400, (height() / 2) + 170), // Positioned to the right of the portal
        anchor("center"),
        area(),
        scale(2),
    ]);

    const interactivePanel = add([
        sprite("InteractivePanel"), // White square of 50x50 pixels
        pos((width() / 2) - 15, (height() / 2) + 200), // Center position on the screen
        area(),
        anchor("center"),
        scale(0.4), // Scale it to make it visible
        "interactive",
    ]);

    const animTowerPanel = add([
        sprite("AnimTowerPanel", { anim: "idle" }),
        pos((width() / 2+20), height() / 2 + 130),
        anchor("center"),
        scale(1),
        area(),
    ]);

    const animTowerPanel2 = add([
        sprite("AnimTowerPanel2", { anim: "idle" }),
        pos((width() / 2-50), height() / 2 + 250),
        anchor("center"),
        scale(1),
        area(),
    ]);

    const FLOOR_HEIGHT = 48;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        color(0, 0, 0, 0),
    ]);

    const scientist = add([
        sprite("scientist"),
        scale(0.4),
        anchor("center"),
        pos(550, 620),
        { charType: "scientist" }
    ]);
   // Add player initially at a different position
   const player = add([
    sprite("player"),
    pos((width() / 2+100), height() / 2 + 270),
    anchor("center"),
    area(),
    scale(2),
    body(),
]);

wait(0, () => {
    // Update player position after the text bubble disappears
    player.pos = vec2((width() / 2 -600), height() / 2 + 250);

    player.play("runDroite");

    player.onUpdate(() => {
        player.move(270, 0);
    });
});

    // Transition automatique vers la scène "panel"
    wait(1.5, () => { // Attendre 3 secondes avant de faire la transition
        go("DialogTimeChamber");
    });
});

scene("DialogTimeChamber", () => {

    add([
        sprite("sceneTimeMachine", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    const timeMachine1 = add([
        sprite("TimeMachine_split1"),
        pos((width() / 2) - 400, (height() / 2) + 170),
        anchor("center"),
        area(),
        scale(2),
    ]);

    const timeMachine2 = add([
        sprite("TimeMachine_split2"),
        pos((width() / 2) + 400, (height() / 2) + 170),
        anchor("center"),
        area(),
        scale(2),
    ]);

    const interactivePanel = add([
        sprite("InteractivePanel"),
        pos((width() / 2) - 15, (height() / 2) + 200),
        area(),
        anchor("center"),
        scale(0.4),
    ]);

    const animTowerPanel = add([
        sprite("AnimTowerPanel", { anim: "idle" }),
        pos((width() / 2 + 20), height() / 2 + 130),
        anchor("center"),
        scale(1),
        area(),
    ]);

    const animTowerPanel2 = add([
        sprite("AnimTowerPanel2", { anim: "idle" }),
        pos((width() / 2 - 50), height() / 2 + 250),
        anchor("center"),
        scale(1),
        area(),
    ]);

    // Création de la case et du texte pour l'instruction
    const instructionBox = add([
        rect(width() - 500, 60, {radius: 20}), // Ajustement de la taille et des marges
        pos(center().x, 60),
        anchor("center"),
        color(255,255,255),
        outline(4),
    ]);

    const instructionText = add([
        text("Appuie sur la barre ESPACE pour faire défiler le dialogue.", { size: 24, width: width() - 60, align: "center" }), // Ajustement de la taille et des marges
        pos(instructionBox.pos), // Positionne le texte au centre de la case
        anchor("center"),
        color(0,0,0),
    ]);

    onKeyPress("space", () => {
        destroy(instructionBox); // Destruction de la case
        destroy(instructionText); // Destruction du texte
    });

    const dialogs = [
        ["scientist", "Bonjour, je suis la Docteure Tempus, spécialiste en voyages temporels."],
        ["scientist", "Tu arrives au bon moment! J'ai une machine à remonter le temps incroyable à te montrer!"],
        ["player", "Une machine à remonter le temps? Comment ça fonctionne?"],
        ["scientist", "C'est très simple. Il y a un panneau de commande au milieu de la salle avec lequel tu peux interragir."],
        ["scientist", "Il y a trois boutons: Moyen-Age, Renaissance, Modernité."],
        ["scientist", "ATTENTION, tu dois les utiliser dans un ordre chronologique !"],
        ["scientist", "Dans chacune de ces époques, tu devras retracer l'historique du bâtiment actuel."],
        ["player", "Que dois-je faire concrètement?"],
        ["scientist", "Pour l'époque médiévale, mets la main sur le plan de construction de la bâtisse."],
        ["scientist", "Selon mes informations, tu la trouveras dans le château médiéval."],
        ["scientist", "Pour la Renaissance, tu devras agencer l'intérieur du bâtiment en répondant aux codes de l'époque."],
        ["scientist", "Pour l'époque moderne ... je sais pas encore"],
        ["player", "Ça a l'air compliqué, mais je vais faire de mon mieux!"],
        ["scientist", "Je sais que tu y arriveras! N'oublie pas de suivre l'ordre des époques."],
        ["player", "Je suis prêt! Allons-y!"],
        ["scientist", "Bonne chance, voyageur. Tu es notre seul espoir! Pour ma part, je dois m'en aller au Congrès international de physique théorique. A bientôt... Je l'espère!"]
    ];

    let curDialog = 0;
    let firstScientistDialogPlayed = false;

    const scientistAvatar = add([
        sprite("scientist"),
        scale(1),
        anchor("center"),
        pos(350, 620),
        { charType: "scientist" }
    ]);

    const playerAvatar = add([
        sprite("player"),
        scale(5),
        anchor("center"),
        pos(280, 600),
        { charType: "player" }
    ]);

    const textbox = add([
        rect(width() - 120, 120, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 80),
        outline(4),
    ]);

    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    onKeyPress("space", () => {
        curDialog = (curDialog + 1) % dialogs.length;
        updateDialog();
    });

    function updateDialog() {
        if (curDialog === dialogs.length - 1) {
            if (music_TM_scene && isMusicPlaying) {
                music_TM_scene.paused = true;
                isMusicPlaying = false;
                }
            go("timeMachineChamber2");
        }

        const [char, dialog] = dialogs[curDialog];

        if (char === 'scientist') {
            if (curDialog === 0 && !firstScientistDialogPlayed) {
                play("music_dr_tempus", { volume: 0.2 });
                firstScientistDialogPlayed = true;
            }
            scientistAvatar.hidden = false;
            playerAvatar.hidden = true;
        } else if (char === 'player') {
            playerAvatar.hidden = false;
            playerAvatar.play("idle");
            scientistAvatar.hidden = true;
        }

        txt.text = dialog;
    }

    updateDialog();
});

scene("timeMachineChamber2", () => {

    music_TM_scene = play("music_TM_scene", {
        volume: 0.5,
        loop: true,
    });
    isMusicPlaying = true;
    // Adding the background
    add([
        sprite("sceneTimeMachine", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    setGravity(1600);

    const SPEED = 200;
    const JUMP_FORCE = 1000;

    const timeMachine1 = add([
        sprite("TimeMachine_split1"),
        pos((width() / 2) - 400, (height() / 2) + 170), // Positioned to the left of the portal
        anchor("center"),
        area(),
        scale(2),
    ]);

    const timeMachine2 = add([
        sprite("TimeMachine_split2"),
        pos((width() / 2) + 400, (height() / 2) + 170), // Positioned to the right of the portal
        anchor("center"),
        area(),
        scale(2),
    ]);

    // Adding the interactive object (white square)
    const interactivePanel = add([
        sprite("InteractivePanel"), // White square of 50x50 pixels
        pos((width() / 2) - 15, (height() / 2) + 200), // Center position on the screen
        area(),
        anchor("center"),
        scale(0.4), // Scale it to make it visible
        "interactive",
    ]);

    const player = add([
        sprite("player"),
        pos((width() / 2 - 160), height() / 2 + 120),
        area(),
        body(),
        scale(2),
        "player"
    ]);

    const animTowerPanel = add([
        sprite("AnimTowerPanel", { anim: "idle" }),
        pos((width() / 2+20), height() / 2 + 130),
        anchor("center"),
        scale(1),
        area(),
    ]);

    const animTowerPanel2 = add([
        sprite("AnimTowerPanel2", { anim: "idle" }),
        pos((width() / 2-50), height() / 2 + 250),
        anchor("center"),
        scale(1),
        area(),
    ]);

    player.play("idle");

    playerMovement(player, JUMP_FORCE, SPEED, width);

    const FLOOR_HEIGHT = 120;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0), // Transparent floor
    ]);

    let isNearInteractivePanel = false;
    let textbox, txt;

    // Collision detection to check if the player is near the interactive object
    player.onCollide("interactive", () => {
        isNearInteractivePanel = true;
        if (!textbox) {
            textbox = add([
                rect(width() - 600, 100, { radius: 32 }),
                anchor("center"),
                pos(center().x, height() - 700),
                outline(4),
            ]);

            txt = add([
                text("Presse ENTER pour accéder à la commande", { size: 27, width: width() - 100, align: "center" }),
                pos(textbox.pos),
                anchor("center"),
                color(0, 0, 0),
            ]);
        }
    });

    player.onCollideEnd("interactive", () => {
        isNearInteractivePanel = false;
        if (textbox) {
            destroy(textbox);
            destroy(txt);
            textbox = null;
            txt = null;
        }
    });

    onKeyPress("enter", () => {
        if (isNearInteractivePanel) {
            // Arrêter la musique en quittant la scène
            if (music_TM_scene && isMusicPlaying) {
                music_TM_scene.paused = true;
                isMusicPlaying = false;
                }
             go("panel");
        }
    });
});

// Variable globale pour suivre le nombre de fois que la scène "panel" a été affichée
let panelCounter = 0;

scene("panel", () => {

    music_panel = play("music_panel", {
        volume: 0.5,
        loop: true,
    });
    isMusicPlaying = true;
    
    add([
      sprite("background_panel", {
        width: width(),
        height: height(),
        fixed: true,
        }),
        z(-1), // Pour s'assurer que l'image est derrière les autres sprites, je lui donne la valeur -1 en Z
    ]);

    add([
        sprite("panelTimeMachine", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    // Incrémenter le compteur de scène
    panelCounter++;

    // Reset cursor to default on frame start for easier cursor management
    onUpdate(() => setCursor("default"));

    function showWarningMessage() {
        const warningText = "Le scientifique m'a indiqué de suivre l'ordre chronologique";
        const warningTextboxWidth = 600;  // Fixed width for the warning message

        add([
            rect(warningTextboxWidth, 100, { radius: 32 }),
            pos(center().x, height() - 200),
            anchor("center"),
            outline(4),
            color(255, 255, 255),
        ]);

        add([
            text(warningText, { size: 24, width: 580, wrap: true }),  // Adjust width accordingly
            pos(center().x, height() - 200),
            anchor("center"),
            color(255, 0, 0),
        ]);
    }

    function addButton(txt, p, f, isEnabled) {
        const btn = add([
            rect(350, 80, { radius: 8 }),
            pos(p),
            area(),
            scale(1),
            anchor("center"),
            outline(4),
            opacity(0),
        ]);

        if (isEnabled) {
            btn.onHoverUpdate(() => {
                btn.scale = vec2(1.2);
                setCursor("pointer");
            });

            btn.onHoverEnd(() => {
                btn.scale = vec2(1);
            });

            btn.onClick(() => {
                 if (music_panel && isMusicPlaying) {
                    music_panel.paused = true; // Arrête la musique
                    isMusicPlaying = false
                }
                f(); // Appelle la fonction de transition de scène après avoir arrêter la musique
            });
        } else {
            btn.color = rgb(128, 128, 128);
            btn.onClick(showWarningMessage);
        }

        return btn;
    }

    // Activer les boutons en fonction du compteur de la scène
    if (panelCounter === 1) {
        addButton("", vec2(320, 250), () => go("cinematic1", { nextScene: "TransitionPresentToMed" }), true);
        addButton("", vec2(700, 250), () => showWarningMessage(), false);
        addButton("", vec2(1080, 250), () => showWarningMessage(), false);
    } else if (panelCounter === 2) {
        addButton("", vec2(320, 250), () => showWarningMessage(), false);
        addButton("", vec2(700, 250), () => go("cinematic1", { nextScene: "TransitionPresentToRen" }), true);
        addButton("", vec2(1080, 250), () => showWarningMessage(), false);
    } else if (panelCounter === 3) {
        addButton("", vec2(320, 250), () => showWarningMessage(), false);
        addButton("", vec2(700, 250), () => showWarningMessage(), false);
        addButton("", vec2(1080, 250), () => go("cinematic1", { nextScene: "sceneMod1" }), true);
    }
});

// Modification de la scène TransitionPresentToMed
scene("TransitionPresentToMed", () => {
    initializeHourglassAnimation1().then(() => {
        go("sceneMed1");
    });

    // Add a black background
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0, 0, 0),
        fixed(),
    ]);
});

scene("sceneMed1", () => {
    // Lancer la musique au début de la scène
    wait(3, () => {
        // Lancer la musique au début de la scène
       music_intro_med = play("music_intro_med", {
           volume: 0.3,
           loop: true,
       });
       isMusicPlaying = true;
   });

   wait(0, () => {
       playCinematicNoMachine1("sceneMed1_end");
   });

    add([
        sprite("medBackground1", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);
    const FLOOR_HEIGHT = 100;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0),
    ]);
});

scene("sceneMed1_end", () => {
    add([
        sprite("medBackground1", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    const FLOOR_HEIGHT = 100;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0),
    ]);

    let textbox = add([
        rect(width() - 280, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 700),
        outline(4),
        lifespan(2),
    ]);

    let txt = add([
        text("Le palais est en feu ! Je dois trouver une solution au plus vite !", { size: 27, width: width() - 100, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
        lifespan(2),
    ]);

    // Add player initially at a different position
    const player = add([
        sprite("player"),
        pos((width() / 2+100), height() / 2 + 270),
        anchor("center"),
        area(),
        body(),
    ]);

    wait(2, () => {
        // Update player position after the text bubble disappears
        player.pos = vec2((width() / 2 + 100), height() / 2 + 270);

        player.play("runDroite");

        player.onUpdate(() => {
            player.move(200, 0);
            if (player.pos.x > width() - 200) {
                go("sceneMed2"); // Transition vers "sceneMed2"
            }
        });
    });
});

scene("sceneMed2", () => {
    // Démarrer music_castle_in_fire
    music_castle_in_fire = play("music_castle_in_fire", {
        volume: 0.6,
        loop: true,
    });

   add([
        sprite("medBackground2", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

     // Création de la case et du texte pour l'instruction
    const instructionBox = add([
        rect(width() - 500, 60, {radius: 20}), // Ajustement de la taille et des marges
        pos(center().x, 60),
        anchor("center"),
        color(255,255,255),
        outline(4),
    ]);

    const instructionText = add([
        text("Appuie sur la barre ESPACE pour faire défiler le dialogue.", { size: 24, width: width() - 60, align: "center" }), // Ajustement de la taille et des marges
        pos(instructionBox.pos), // Positionne le texte au centre de la case
        anchor("center"),
        color(0,0,0),
    ]);

    onKeyPress("space", () => {
        destroy(instructionBox); // Destruction de la case
        destroy(instructionText); // Destruction du texte
    });

    const dialogs = [
        ["knight", "Quelle catastrophe ! Le palais de mon cher Seigneur est rongé par les flammes."],
        ["knight", "Je dois voler à son secours avant que ce dernier ne perde la vie..."],
        ["player", "Attends!"],
        ["knight", "Halte ! Qui ose s'adresser à un chevalier de mon rang de cette manière ?"],
        ["player", "Mes excuses Sir... Une quête de premier ordre m'a été remise."],
        ["knight", "Mmh."],
        ["knight", "Informe-moi de l'objet de ton aventure."],
        ["player", "(Je dois agir de manière intelligente pour ne pas périr dans les prochains instants.)"],
        ["player", "Je suis grand architecte venu de lieux forts lointains."],
        ["knight", "Et?"],
        ["player", "J'ai été commissioné pour reconstruire le fort qui est actuellement en feu. Je requiers votre aide..."],
        ["knight", "TOUT CE QUE VOUS VOULEZ ! Je donnerai ma vie pour cette seigneurie."],
        ["player", "Je sais de sources sûres que les parchemins de construction étaient conservés dans la bibliothèque du Seigneur."],
        ["player", "Malheureusement, ceux-ci sont très certainement détr..."],
        ["knight", "J'ai peut être une solution : des copies ont été produites par un moine réfractaire."],
        ["knight", "Cependant ce dernier vit au sommet d'une tour délabrée. Personne n'ose s'y aventurer."],
        ["player", "Emmenez-moi à cette tour. Il est crucial que je mette la main sur ces parchemins."],
        ["knight", "Si vous y tenez... la tour se trouve au centre du bourg, par ici."],
        ["knight", "Je ne peux vous accompagner. Je dois tenter de sauver ce qui peut l'être au château."],
    ];

    let curDialog = 0;

    const knightAvatar = add([
        sprite("knight"),
        scale(15),
        anchor("center"),
        pos(280, 550),
        { charType: "knight" }
    ]);

    const playerAvatar = add([
        sprite("player"),
        scale(10),
        anchor("center"),
        pos(280, 550),
        { charType: "player" }
    ]);

    const textbox = add([
        rect(width() - 150, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 80),
        outline(4),
    ]);

    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    onKeyPress("space", () => {
        curDialog = (curDialog + 1) % dialogs.length;
        updateDialog();
    });

    function updateDialog() {
         if (curDialog === dialogs.length - 1) {
            // Arrêter les deux musiques lorsqu'on change de scène
            if (music_intro_med && isMusicPlaying) {
                music_intro_med.paused = true;
            }
            if (music_castle_in_fire) {
                music_castle_in_fire.paused = true;
            }
            isMusicPlaying = false;
             go("Tower");
        }

        const [char, dialog] = dialogs[curDialog];

        if (char === 'knight') {
            knightAvatar.hidden = false;
            knightAvatar.play("idle");
            playerAvatar.hidden = true;
        } else if (char === 'player') {
            playerAvatar.hidden = false;
            playerAvatar.play("idle");
            knightAvatar.hidden = true;
        }

        txt.text = dialog;
    }

    updateDialog();
    onKeyPress("enter", () => {
         // Arrêter la musique lorsqu'on change de scène
        if (music_intro_med && isMusicPlaying) {
                music_intro_med.paused = true;
        }
         if (music_castle_in_fire) {
            music_castle_in_fire.paused = true;
        }
        isMusicPlaying = false;
        go("Tower");
    });
});

scene("Tower", TowerScene);

scene("monkChamber", () => {
  
    // Démarrer la musique si elle n'est pas déjà en cours
    if (!isMusicPlaying) {
        monk_abbey_song = play("monk_abbey_song", {
            volume: 0.5,
            loop: true,
        });
        door_opening = play("door_opening", {
            volume: 0.5,
            loop: false, // La musique ne doit jouer qu'une fois
        });
        isMusicPlaying = true;
    }

    add([
        sprite("monkChamber", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    const instructionText = add([
        text("Appuie sur la barre ESPACE pour faire défiler le dialogue.", { width: width() / 2 }),
        pos(12, 48),
    ]);

    onKeyPress("space", () => {
        destroy(instructionText);
    });


    const dialogs = [
        ["player", "Bonjour, moine. Un chevalier m'a envoyé ici pour récupérer des plans du château."],
        ["player", "On m'a indiqué que vous étiez en possession d'une copie."],
        ["monk", "Et pourquoi voudrais-je partager de tels documents avec un étranger?"],
        ["monk", "Ces plans ne sont pas des jouets. Il pourrait être dangereux si ces derniers tombaient entre de mauvaises mains."],
        ["player", "Je comprends vos craintes, mais j'ai de bonnes raisons."],
        ["player", "Je suis ici pour aider à protéger le château contre une menace future. Sans ces plans, je ne peux pas garantir la survie du lieu."],
        ["monk", "Une menace, dites-vous? Vous n'êtes pas le premier à venir ici avec une histoire de ce genre."],
        ["monk", "Comment puis-je savoir que vos intentions sont pures?"],
        ["player", "Je vous assure de ma loyauté."],
        ["monk", "Mais ces plans... Je crains qu'en vous les remettant, je ne mette ces lieux en grand danger."],
        ["player", "Tout ce que je désire est d'empêcher que le mal ne se répande."],
        ["monk", "Très bien. Vous semblez sincère. Je vais vous confier ces plans. Mais je vous en prie, faites-en bon usage."],
        ["player", "Vous avez ma parole. Merci de votre confiance. Je ferai tout pour que votre aide ne soit pas vaine."],
        ["monk", "Allez maintenant. Que la lumière guide vos actions futures! "]
    ];

    let curDialog = 0;

    const playerAvatar = add([
        sprite("player"),
        scale(10),
        anchor("center"),
        pos(280, 550),
    ]);

    const monkAvatar = add([
        sprite("Monk"),
        scale(15),
        anchor("center"),
        pos(450, 450),
    ]);

    const textbox = add([
        rect(width() - 150, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 80),
        outline(4),
    ]);

    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    onKeyPress("space", () => {
        curDialog++;
        if (curDialog < dialogs.length) {
            updateDialog();
        } else {
           // Arrêter la musique avant de changer de scène
           if (monk_abbey_song) {
               monk_abbey_song.paused = true;
              
           }
           isMusicPlaying = false;
           
            go("monkChamber_end");
        }
    });

    function updateDialog() {
        const [char, dialog] = dialogs[curDialog];

        if (char === 'monk') {
            monkAvatar.hidden = false;
            monkAvatar.play("idle");
            playerAvatar.hidden = true;
        } else if (char === 'player') {
            playerAvatar.hidden = false;
            playerAvatar.play("idle");
            monkAvatar.hidden = true;
        }

        txt.text = dialog;
    }

    updateDialog();

    onKeyPress("enter", () => {
        // Arrêter la musique avant de changer de scène
        if (monk_abbey_song) {
            monk_abbey_song.paused = true;
        }
         isMusicPlaying = false;
        go("monkChamber_end");
    });
});

scene("monkChamber_end", () => {
    wait(0, () => {
        playCinematicNoMachine2("TransitionMedToPresent");
    });
    add([
        sprite("monkChamber", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);
    const FLOOR_HEIGHT = 48;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0),
    ]);
});

// Modification de la scène TransitionPresentToMed
scene("HourglassAnimation2", () => {

    // Démarrer la musique seulement si aucune autre musique n'est en cours
    if (!music_time_machine_processing || !isMusicPlaying) {
          music_time_machine_processing = play("music_time_machine_processing", {
            volume: 0.5,
            loop: true,
        });
         isMusicPlaying = true;
    }


    initializeHourglassAnimation1().then(() => {
        // Arrêter la musique en quittant la scène
        if (music_time_machine_processing && isMusicPlaying) {
            music_time_machine_processing.paused = true;
            isMusicPlaying = false;
        }
        go("PlayCinematic2");
    });

    // Add a black background
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0, 0, 0),
        fixed(),
    ]);
});


// Nouvelle scène pour jouer la cinématique 2
scene("PlayCinematic2", () => {
    playCinematic2("timeMachineChamber2");
});

// Modification de la scène existante pour utiliser les nouvelles scènes
scene("TransitionMedToPresent", () => {
    go("HourglassAnimation2"); // Commence avec l'animation de sablier
});

// Modification de la scène TransitionPresentToRen
scene("TransitionPresentToRen", () => {

        // Démarrer la musique seulement si aucune autre musique n'est en cours
        if (!music_time_machine_processing || !isMusicPlaying) {
            music_time_machine_processing = play("music_time_machine_processing", {
              volume: 0.5,
              loop: false,
          });
           isMusicPlaying = true;
      }
  
      initializeHourglassAnimation1().then(() => {
          // Arrêter la musique en quittant la scène
          if (music_time_machine_processing && isMusicPlaying) {
              music_time_machine_processing.paused = true;
              isMusicPlaying = false;
          }
          go("sceneRen1");
      });

    // Add a black background
    add([
        rect(width(), height()),
        pos(0, 0),
        color(0, 0, 0),
        fixed(),
    ]);
});

scene("sceneRen1", () => {
    // Lancer la musique au début de la scène
       ren_market = play("ren_market", {
           volume: 0.3,
           loop: true,
       });
       isMusicPlaying = true;
   

   wait(0, () => {
       playCinematicNoMachine1("sceneRen1_end");
   });

    add([
        sprite("background_intro_ren", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);
    const FLOOR_HEIGHT = 100;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0),
    ]);
});

scene("sceneRen1_end", () => {
    add([
        sprite("background_intro_ren", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    const FLOOR_HEIGHT = 100;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0),
    ]);

    let textbox = add([
        rect(width() - 100, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 700),
        outline(4),
    ]);

    let txt = add([
        text("Les bâtiments, les vêtements... Je dois être à la Renaissance !", { size: 27, width: width() - 100, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    // Add player initially at a different position
    const player = add([
        sprite("player"),
        pos((width() / 2 + 100), height() / 2 + 270),
        anchor("center"),
        area(),
        body(),
    ]);
     
     let firstTextCompleted = false;

    wait(2, () => {
          
      if(!firstTextCompleted){
          firstTextCompleted = true;
            txt.text = "Le château du Moyen-Âge a finalement été reconstruit. Il faut que je m'y rende !";
        
          
             wait(1, () => {
             
        // Update player position after the text bubble disappears
        player.pos = vec2((width() / 2 + 100), height() / 2 + 270);
      
        player.play("runDroite");

        player.onUpdate(() => {
            player.move(200, 0);
            if (player.pos.x > width()) {
                if (ren_market && isMusicPlaying) { 
                    ren_market.paused = true;
                    isMusicPlaying = false;
                }
                go("sceneRendialogue"); 
            }

            if (ren_market && isMusicPlaying) { 
                    ren_market.paused = true;
                    isMusicPlaying = false;
                }
        });
         });
        }
    });
});

scene("sceneRendialogue", () => {

    // Musiques
    music_intro_dialogue = play("music_intro_dialogue", {
        volume: 0.5,
        loop: true,
    });

    music_intro_background = play("music_intro_background", {
        volume: 0.3,
        loop: true,
    });
    isMusicPlaying = true;


    add([
        sprite("renConstruction", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);

    const instructionText = add([
        text("Appuie sur la barre ESPACE pour faire défiler le dialogue.", { width: width() / 2 }),
        pos(12, 48),
    ]);

    onKeyPress("space", () => {
        destroy(instructionText);
    });

    const dialogs = [
        ["Craftman", "Monsieur, vous devez m'aider ! Vous semblez perdu, mais nous avons besoin de vous."],
        ["Craftman", "Notre maître d'œuvre s'est enfui, et il ne reste que son livre pour guider la construction de cette maison."],
        ["player", "Le maître d'œuvre s'est enfui ?"],
        ["Craftman", "En effet. Désormais, le temps presse."],
        ["Craftman", "La famille qui a commandé cette maison attend une construction inspirée des innovations architecturales de notre temps."],
        ["Craftman", "Pouvez-vous nous guider dans la lecture du livre du maître d'oeuvre?"],
        ["Craftman", "Voici les esquisses et les instructions du maître d'œuvre."],
        ["Craftman", "Nous devons construire une maison avec des proportions harmonieuses, et des éléments décoratifs sophistiqués."],
        ["player", "Ça ressemble à quelque chose que je connais, effectivement..."],
        ["player", "Oui, je comprends. Je vais essayer de suivre les instructions. Quelles sont les attentes précises de la famille ?"],
        ["Craftman", "La famille souhaite une maison qui reflète la modernité et le progrès de notre époque."],
        ["player", "D'accord. Avez-vous les ouvriers prêts ?"],
        ["Craftman", "Oui, les ouvriers sont prêts et attendent vos directives."],
        ["Craftman", "Nous comptons sur vous pour diriger cette construction."],
        ["Craftman", "Vous êtes notre seul espoir pour que cette maison soit prête à temps."],
    ];

    let curDialog = 0;
    let craftmanMusicPlayed = false; // Flag pour suivre si la musique a été jouée

    const craftmanAvatar = add([
        sprite("Craftman", { anim: "idle" }),
        pos(400, 550),
        scale(9),
        anchor("center"),
        area(),
    ]);

    const playerAvatar = add([
        sprite("player"),
        scale(5),
        anchor("center"),
        pos(280, 600),
        area(),
    ]);

    const textbox = add([
        rect(width() - 150, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 80),
        outline(4),
    ]);

    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    function updateDialog() {
        if (curDialog >= dialogs.length) {
            txt.text = "Fin du dialogue. Appuyez sur ESPACE pour te rendre au jeu !";
            onKeyPress("space", () => {
               // Arrêter les musiques avant de changer de scene
                music_intro_dialogue.paused = true;
                go("menu");
            });
            return;
        }

        const [char, dialog] = dialogs[curDialog];

        if (char === "Craftman") {
            craftmanAvatar.hidden = false;
            playerAvatar.hidden = true;
            craftmanAvatar.play("idle");

            // Jouer la musique du craftman une seule fois
            if (!craftmanMusicPlayed) {
                 music_craftman = play("music_craftman", {
                    volume: 0.5,
                    loop: false,
                });
                isMusicPlaying = true;
                craftmanMusicPlayed = true;
            }


        } else if (char === 'player') {
            playerAvatar.hidden = false;
            playerAvatar.play("idle");
            craftmanAvatar.hidden = true;
        }

        txt.text = dialog;
    }

    onKeyPress("space", () => {
        curDialog++;
        updateDialog();
    });

    updateDialog();

    onKeyPress("enter", () => {
        // Arrêter les musiques avant de changer de scene
        music_intro_dialogue.paused = true;
        go("menu");
    });
});

// Scene "RenGame"
let currentRound = 0;
let timer = 5;
let correctAnswers = 0;
let gameInterval;
let hasWrongAnswer = false;
let timeoutOccurred = false;

function startGame() {
    currentRound = 0;
    correctAnswers = 0;
    hasWrongAnswer = false;
    timeoutOccurred = false;
    timer = 5;
    shuffle(themes);
    go("RenGame");
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

scene("menu", () => {
    // Reset relevant game states to ensure correct scene transitions
    panelCounter = 0;
    currentRound = 0;
    timer = 5;
    correctAnswers = 0;
    hasWrongAnswer = false;
    timeoutOccurred = false;
    usedThemes = new Set(); // Reset used themes

    const renTable = add([
        sprite("renTable"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        scale(1),
        z(0), // Ensure z-index is lower than book
    ]);

    textbox = add([
        rect(width() - 40, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 700),
        outline(4),
    ]);

    txt = add([
        text(" Utilise les touches ← et → pour choisir le mobilier. Presse sur ESPACE pour jouer !", { size: 27, width: width(), align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    // Start music when entering the menu scene
    if (!music_game_ren || !isMusicPlaying) {
        music_game_ren = play("music_game_ren", {
            volume: 0.5,
            loop: true,
        });
        isMusicPlaying = true;
    }

    onKeyPress("space", () => {
        startGame();
    });
    
    onSceneLeave(() => {
        if (music_game_ren && isMusicPlaying) {
            music_game_ren.paused = true;
            music_intro_background.paused = true;
            isMusicPlaying = false;
        }
    });
});

// Variables pour stocker les thèmes utilisés
let usedThemes = new Set();

// Function pour choisir un thème non utilisé
function getUnusedTheme() {
    for (let i = 0; i < themes.length; i++) {
        if (!usedThemes.has(themes[i])) {
            usedThemes.add(themes[i]);
            return themes[i];
        }
    }
    return null; // Si tous les thèmes ont été utilisés
}

scene("RenGame", () => {
     if(music_game_ren && music_intro_background && !isMusicPlaying){
        music_game_ren.paused = false
        music_intro_background.paused = false
        isMusicPlaying = true
    }
    const theme = getUnusedTheme();
    if (!theme) {
        endGame(); // Terminer le jeu si tous les thèmes ont été utilisés
        return;
    }

    const leftSprite = Math.random() < 0.5 ? theme.medieval : theme.renaissance;
    const rightSprite = leftSprite === theme.medieval ? theme.renaissance : theme.medieval;

    const spriteScale = 0.5;

    const renTable = add([
        sprite("renTable"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        scale(1),
        z(0),
    ]);

    const book = add([
        sprite("book", { anim: "idle" }),
        pos(width() / 2, height() / 2 + 100),
        anchor("center"),
        scale(13),
        z(1),
    ]);

    book.play("idle");

    const leftSpriteObj = add([
        sprite(leftSprite),
        pos(width() / 4 + 200, height() / 2 + 150),
        anchor("center"),
        scale(spriteScale),
        z(2),
    ]);

    const rightSpriteObj = add([
        sprite(rightSprite),
        pos((3 * width()) / 4 - 200, height() / 2 + 150),
        anchor("center"),
        scale(spriteScale),
        z(2),
    ]);

    const timerText = add([
        text(timer.toString(), { size: 48 }),
        anchor("center"),
        pos(width() / 2, 50),
        z(3),
    ]);

    const themeText = leftSprite.includes("Door") && rightSprite.includes("Door") ? "Portes" :
        leftSprite.includes("Ceiling") && rightSprite.includes("Ceiling") ? "Plafonds" :
            leftSprite.includes("FirePlace") && rightSprite.includes("FirePlace") ? "Cheminées" :
                leftSprite.includes("Column") && rightSprite.includes("Column") ? "Colonnes" :
                    leftSprite.includes("Floor") && rightSprite.includes("Floor") ? "Sols" :
                        leftSprite.includes("Furnishing") && rightSprite.includes("Furnishing") ? "Mobiliers" :
                            leftSprite.includes("Ornament") && rightSprite.includes("Ornament") ? "Ornements" :
                                leftSprite.includes("Painting") && rightSprite.includes("Painting") ? "Peintures" :
                                    leftSprite.includes("Stairs") && rightSprite.includes("Stairs") ? "Escaliers" :
                                        leftSprite.includes("Window") && rightSprite.includes("Window") ? "Fenêtres" : "";

    const textbox = add([
        rect(width() - 800, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 600),
        outline(4),
    ]);

    const themeIndicator = add([
        text(themeText, { size: 48 }),
        pos(textbox.pos),
        anchor("center"),
        pos(width() / 2, height() - 600),
        z(3),
        color(0, 0, 0),
    ]);

    function updateTimer() {
        timer -= 1;
        timerText.text = timer.toString();
        if (timer <= 0) {
            endRound(false, true);
        }
    }

    gameInterval = setInterval(updateTimer, 1000);

    function handleKeyPress(correct) {
        clearInterval(gameInterval);
        book.play("pageTurned");
        leftSpriteObj.destroy();
        rightSpriteObj.destroy();
        const animDuration = (8 - 1 + 1) / 6;
        wait(animDuration, () => {
            book.play("idle");
            endRound(correct);
        });
    }

    onKeyPress("left", () => {
        play("music_page_turn", {
          volume: 0.5,
          loop: false,
      });
     isMusicPlaying = true;
      handleKeyPress(leftSprite === theme.renaissance);
  });

  onKeyPress("right", () => {
        play("music_page_turn", {
          volume: 0.5,
          loop: false,
      });
    isMusicPlaying = true;
      handleKeyPress(rightSprite === theme.renaissance);
  });

    function endRound(correct, timeout = false) {
        clearInterval(gameInterval);
        if (timeout) {
            timeoutOccurred = true;
            endGame();
            return;
        }
        if (!correct) {
            hasWrongAnswer = true;
        }
        currentRound += 1;
        if (currentRound >= themes.length) {
            endGame();
        } else {
            timer = 5;
            go("RenGame");
        }
    }
});

function endGame() {
    console.log("endGame called with:", { timeoutOccurred, hasWrongAnswer });
    if (timeoutOccurred) {
        timeoutOccurred = false; // Reset the flag
        go("timeout");
    } else if (!hasWrongAnswer) {
        music_game_ren.paused = true
        music_intro_background.paused = true
        isMusicPlaying = false;
        go("win");
    } else {
        music_game_ren.paused = true
        music_intro_background.paused = true
        isMusicPlaying = false;
        go("lose");
    }
}

const TRASH_SPEED = 120;
const OBJ_HEALTH = 4;
const MIN_SCALE = 2; // Taille minimale du sprite
const MAX_SCALE = 8; // Taille maximale du sprite
const SPRITE_SPACING = 15; // Espace entre les sprites

// Scène "win"
scene("win", () => {
    let insaneMode = false;

    music_happy = play("music_happy", {
        volume: 0.5,
        loop: true,
    });

    music_noble_agree = play("music_noble_agree", {
        volume: 0.5,
        loop: false,
    });
    let isMusicPlaying = true;

    // Ajoute le sprite "RenResult" en arrière-plan
    add([
        sprite("RenResult", { width: width(), height: height() }), // Dimension pour couvrir toute la scène
    ]);

    const dialogs = [
        ["Noble", "Cet agencement est spectaculaire."],
        ["Noble", "Je vous remercie infiniment pour le travail effectué !"],
        ["Noble", "Je me ferai un honneur de faire perdurer votre construction dans les générations à venir."],
    ];

    let curDialog = 0;

    // Ajoute le sprite "Noble heureux du résultat"
    const NobleAvatar = add([
        sprite("noble_happy", { anim: "idle" }),
        scale(7),
        anchor("center"),
        pos(300, 400),
        area(), // Ajoute une zone pour le sprite
        body({ isStatic: true }), // Fixe le sprite pour qu'il ne bouge pas
        { charType: "Noble" }
    ]);

    const textbox = add([
        rect(width() - 150, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 80),
        outline(4),
    ]);

    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    function updateDialog() {
        if (curDialog >= dialogs.length) {
            music_happy.paused = true
            music_noble_agree.paused = true; // Arrête la musique à la fin du dialogue
            isMusicPlaying = false;
            onKeyPress("space", () => {
                go("Win_end");
            });
            return;
        }
        const [char, dialog] = dialogs[curDialog];

        if (char === "Noble") {
            NobleAvatar.play("idle");
        }

        txt.text = dialog;
    }

    onKeyPress("space", () => {
        curDialog++;
        updateDialog();
    });

    updateDialog();

    function spawnTrash() {
        let scale = rand(MIN_SCALE, MAX_SCALE);
        add([
            sprite("validation", { width: 32 * scale, height: 32 * scale }), // Dimension aléatoire
            area(),
            pos(rand(0, width()), -SPRITE_SPACING), // Position initiale pour espacer les sprites
            health(OBJ_HEALTH),
            anchor("bot"),
            "trash",
            { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
        ]);
        wait(insaneMode ? 0.1 : 0.3, spawnTrash);
    }

    onUpdate("trash", (t) => {
        t.move(0, t.speed * (insaneMode ? 5 : 1));
        if (t.pos.y - t.height > height()) {
            destroy(t);
        }
    });

    spawnTrash();
});

scene("lose", () => {
    unhappy_music = play("unhappy_music", {
        volume: 0.5,
        loop: true,
    });

    music_noblle_disagree = play("music_noblle_disagree", {
        volume: 0.5,
        loop: true,
    });

    let isMusicPlaying = true;

    let insaneMode = false;

    add([
        sprite("Ren_MedResult", { width: width(), height: height() }),
    ]);

    const dialogs = [
        ["Noble", "Mais quelle horreur !"],
        ["Noble", "Ces éléments ne conviennent pas du tout à l'époque dans laquelle nous vivons !"],
        ["Noble", "Recommencez de suite le travail et rendez honneur aux innovations de notre temps !"],
    ];

    let curDialog = 0;

    const NobleAvatar = add([
        sprite("noble_unhappy", { anim: "idle" }),
        scale(7),
        anchor("center"),
        pos(300, 320),
        area(),
        body({ isStatic: true }),
        { charType: "Noble" }
    ]);

    const textbox = add([
        rect(width() - 150, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 80),
        outline(4),
    ]);

    const txt = add([
        text("", { size: 32, width: width() - 230, align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    function updateDialog() {
        if (curDialog >= dialogs.length) {
            txt.text = "Fin du dialogue. Appuyez sur ESPACE pour revenir au menu.";
            unhappy_music.paused = true;
            music_noblle_disagree.paused = true;
            isMusicPlaying = false;
            onKeyPress("space", () => {
                go("menu");
            });
            return;
        }

        const [char, dialog] = dialogs[curDialog];

        if (char === "Noble") {
            NobleAvatar.play("idle");
        }

        txt.text = dialog;
    }

    onKeyPress("space", () => {
        curDialog++;
        updateDialog();
    });

    updateDialog();

    function spawnTrash() {
        let scale = rand(MIN_SCALE, MAX_SCALE);
        add([
            sprite("denied", { width: 32 * scale, height: 32 * scale }),
            area(),
            pos(rand(0, width()), -SPRITE_SPACING),
            health(OBJ_HEALTH),
            anchor("bot"),
            "trash",
            { speed: rand(TRASH_SPEED * 0.5, TRASH_SPEED * 1.5) },
        ]);
        wait(insaneMode ? 0.1 : 0.3, spawnTrash);
    }

    onUpdate("trash", (t) => {
        t.move(0, t.speed * (insaneMode ? 5 : 1));
        if (t.pos.y - t.height > height()) {
            destroy(t);
        }
    });

    spawnTrash();
});

scene("timeout", () => {
    const renTable = add([
        sprite("renTable"),
        pos(width() / 2, height() / 2),
        anchor("center"),
        scale(1),
        z(0), // Ensure z-index is lower than book
    ]);

    const craftmanAvatar = add([
        sprite("Craftman", { anim: "idle" }),
        pos(250, 550),
        scale(12),
        anchor("center"),
        area(),
    ]);

    textbox = add([
        rect(width() - 40, 100, { radius: 32 }),
        anchor("center"),
        pos(center().x, height() - 700),
        outline(4),
    ]);

    txt = add([
        text(" Tu as été trop lent ! Presse ESPACE pour recommence", { size: 27, width: width(), align: "center" }),
        pos(textbox.pos),
        anchor("center"),
        color(0, 0, 0),
    ]);

    onKeyPress("space", () => {
        go("menu");
    });
});

// Scene "Win_end"
scene("Win_end", () => {
    wait(0, () => {
        playCinematicNoMachine2("TransitionRenToPresent");
    });
    add([
        sprite("RenResult", {
            width: width(),
            height: height(),
            fixed: true,
        }),
    ]);
    const FLOOR_HEIGHT = 48;
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({ isStatic: true }),
        opacity(0),
    ]);
});

// Scene "TransitionRenToPresent"
scene("TransitionRenToPresent", () => {
    go("HourglassAnimation2"); // Commence avec l'animation de sablier
});

// Scene "HourglassAnimation2"
scene("HourglassAnimation2", () => {
    initializeHourglassAnimation2().then(() => {
        go("PlayCinematic2"); // Transition vers la scène suivante
    });

    add([
        rect(width(), height()),
        pos(0, 0),
        color(0, 0, 0),
        fixed(),
    ]);
});

// Scene "PlayCinematic2"
scene("PlayCinematic2", () => {
    playCinematic2("timeMachineChamber2");
});

// Start the game at the menu
go("cover");
