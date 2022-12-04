CREATE DATABASE NBAdb;

CREATE Table team(
    coach_name VARCHAR(100) not null,
    team_name VARCHAR(100) not null,
    coach_experience INTEGER NOT NULL,
    PRIMARY KEY(team_name)   
);

CREATE Table championship(
    champ_year INTEGER,
    champ_team_name VARCHAR(100) not null,
    team_result INTEGER NOT NULL,
    PRIMARY KEY(champ_year,champ_team_name)
);

CREATE Table salary(
    player_ID INTEGER NOT NULL,
    player_name VARCHAR(100) not null,
    player_salary INTEGER NOT NULL,
    PRIMARY KEY(player_ID)
);

CREATE Table player(
    player_name VARCHAR(100) not null,
    team_name VARCHAR(100) not null,
    player_position VARCHAR(100) not null,
    player_age INTEGER NOT NULL,
    PRIMARY KEY(player_name)           
);

CREATE Table belongs_to(
    player_ID INTEGER NOT NULL,
    player_name VARCHAR(100) not null,
    PRIMARY KEY(player_ID, player_name),
    FOREIGN KEY(player_ID) REFERENCES salary(player_ID) ON DELETE CASCADE,
    FOREIGN KEY(player_name) REFERENCES player(player_name) ON DELETE CASCADE
);

CREATE Table plays_for(
    player_name VARCHAR(100) not null,
    team_name VARCHAR(100) not null,
    PRIMARY KEY(player_name, team_name),
    FOREIGN KEY(player_name) REFERENCES player(player_name) ON DELETE CASCADE,
    FOREIGN KEY(team_name) REFERENCES team(team_name) ON DELETE CASCADE
);

CREATE Table competes_for(
    team_name VARCHAR(100) not null,
    champ_year INTEGER NOT NULL,
    PRIMARY KEY(team_name, champ_year),
    FOREIGN KEY(team_name) REFERENCES team(team_name) ON DELETE CASCADE,
    FOREIGN KEY(champ_year) REFERENCES championship(champ_year)ON DELETE CASCADE 
);
