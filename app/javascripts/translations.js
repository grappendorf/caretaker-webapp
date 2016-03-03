I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {
  "account": "Account",
  "action": {
    "add_widget": "Add widget",
    "back": "Back",
    "cancel": "Cancel",
    "change_password": "Change password",
    "change_your_password": "Change your password",
    "close": "Close",
    "create_dashboard": "Create dashboard",
    "create_widget": "Create widget",
    "dashboards": "Dashboards",
    "delete": "Delete",
    "delete_dashboard": "Delete dashboard",
    "edit": "Edit",
    "edit_widget": "Edit widget",
    "edit_your_profile": "Edit your profile",
    "enter_dashboard_name": "Enter dashboard name",
    "help": "Help",
    "help_about": "About",
    "home": "Home",
    "new": "New",
    "new_dashboard": "New dashboard",
    "no": "No",
    "off": "Off",
    "ok": "Ok",
    "on": "On",
    "philips_hue_bridge_register": "Register with Hue bridge (Press Hue button!)",
    "philips_hue_bridge_unregister": "Unregister from Hue bridge",
    "philips_hue_synchronize_lights": "Synchronize lights to database",
    "reload_dashboard": "Reload",
    "rename": "Rename",
    "save": "Save",
    "save_profile": "Save profile",
    "sign_in": "Sign in",
    "sign_out": "Sign out",
    "widget_properties": "Widget properties",
    "yes": "Yes"
  },
  "attributes": {
    "device_action": {
      "description": "Description",
      "name": "Name",
      "name_hint": "Unique Action name",
      "script": "Script",
      "script_hint": "Write your Action Script here"
    },
    "building": {"description": "Description", "name": "Name"},
    "cipcam_device": {"password": "Password", "refresh_interval": "Refresh interval", "user": "User"},
    "dashboard": {"default": "Default", "name": "Name", "user": {"name": "User"}},
    "device": {"address": "Address", "description": "Description", "name": "Name", "type": "Type", "uuid": "UUID"},
    "device_script": {
      "description": "Description",
      "enabled": "Enabled",
      "name": "Name",
      "name_hint": "Unique Script name",
      "script": "Script",
      "script_hint": "Write your Device Script here"
    },
    "easyvr_device": {"buttons_per_row": "Buttons per row", "num_buttons": "Number of buttons"},
    "floor": {"description": "Description", "name": "Name"},
    "philips_hue": {
      "application_id": "Application ID",
      "bridge": "Bridge",
      "bridge_uri": "Bridge URI",
      "light": {
        "brightness": "Brightness",
        "hue": "Hue",
        "mode": "Color mode",
        "name": "Name",
        "reachable": "Reachable",
        "saturation": "Saturation",
        "type": "Type",
        "uniqueid": "ID"
      },
      "lights": "Lights"
    },
    "remote_control_device": {"buttons_per_row": "Buttons per row", "num_buttons": "Number of buttons"},
    "room": {"description": "Description", "number": "Number"},
    "switch_device": {"num_switches": "Number of switches", "switches_per_row": "Switches per row"},
    "user": {
      "email": "Email",
      "last_sign_in_at": "Last sign in",
      "name": "Name",
      "new_password": "New Password",
      "password": "Password",
      "password_confirmation": "Password confirmation",
      "remember_me": "Remember me",
      "roles": "Roles"
    },
    "widget": {"height": "Height", "title": "Title", "width": "Width"}
  },
  "date": {
    "abbr_day_names": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    "abbr_month_names": [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "day_names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "formats": {"default": "%Y-%m-%d", "long": "%B %d, %Y", "short": "%b %d"},
    "month_names": [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    "order": ["year", "month", "day"]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {"one": "about 1 hour", "other": "about %{count} hours"},
      "about_x_months": {"one": "about 1 month", "other": "about %{count} months"},
      "about_x_years": {"one": "about 1 year", "other": "about %{count} years"},
      "almost_x_years": {"one": "almost 1 year", "other": "almost %{count} years"},
      "half_a_minute": "half a minute",
      "less_than_x_minutes": {"one": "less than a minute", "other": "less than %{count} minutes"},
      "less_than_x_seconds": {"one": "less than 1 second", "other": "less than %{count} seconds"},
      "over_x_years": {"one": "over 1 year", "other": "over %{count} years"},
      "x_days": {"one": "1 day", "other": "%{count} days"},
      "x_minutes": {"one": "1 minute", "other": "%{count} minutes"},
      "x_months": {"one": "1 month", "other": "%{count} months"},
      "x_seconds": {"one": "1 second", "other": "%{count} seconds"}
    },
    "prompts": {"day": "Day", "hour": "Hour", "minute": "Minute", "month": "Month", "second": "Seconds", "year": "Year"}
  },
  "description": {
    "add_widgets_to_your_dashboard": "You can add widgets to your dashboard by clicking on the 'Add widget' button.",
    "create_your_first_dashboard": "Create your first dashboard by clicking on the 'Create dashboard' button.",
    "there_are_no_fields_for_this_fieldset": "No further information must be provided.",
    "you_currently_have_no_dashboard": "You currently have no dashboard.",
    "your_dashboard_is_empty": "Your dashboard is currently empty."
  },
  "devise": {
    "confirmations": {
      "confirmed": "Your account was successfully confirmed. You are now signed in.",
      "send_instructions": "You will receive an email with instructions about how to confirm your account in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."
    },
    "failure": {
      "already_authenticated": "You are already signed in.",
      "inactive": "Your account was not activated yet.",
      "invalid": "Invalid email or password.",
      "invalid_token": "Invalid authentication token.",
      "last_attempt": "You have one more attempt before your account is locked.",
      "locked": "Your account is locked.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session expired, please sign in again to continue.",
      "unauthenticated": "You need to sign in or sign up before continuing.",
      "unconfirmed": "You have to confirm your account before continuing."
    },
    "mailer": {
      "confirmation_instructions": {"subject": "Confirmation instructions"},
      "reset_password_instructions": {"subject": "Reset password instructions"},
      "unlock_instructions": {"subject": "Unlock Instructions"}
    },
    "omniauth_callbacks": {
      "failure": "Could not authenticate you from %{kind} because \"%{reason}\".",
      "success": "Successfully authenticated from %{kind} account."
    },
    "passwords": {
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions about how to reset your password in a few minutes.",
      "send_paranoid_instructions": "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
      "updated": "Your password was changed successfully. You are now signed in.",
      "updated_not_active": "Your password was changed successfully."
    },
    "registrations": {
      "destroyed": "Bye! Your account was successfully cancelled. We hope to see you again soon.",
      "signed_up": "Welcome! You have signed up successfully.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "You updated your account successfully."
    },
    "sessions": {
      "already_signed_out": "Signed out successfully.",
      "signed_in": "Signed in successfully.",
      "signed_out": "Signed out successfully."
    },
    "unlocks": {
      "send_instructions": "You will receive an email with instructions about how to unlock your account in a few minutes.",
      "send_paranoid_instructions": "If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.",
      "unlocked": "Your account has been unlocked successfully. Please sign in to continue."
    }
  },
  "documentation": "Documentation",
  "errors": {
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "was already confirmed, please try signing in",
      "blank": "can't be blank",
      "confirmation": "doesn't match %{attribute}",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "can't be empty",
      "equal_to": "must be equal to %{count}",
      "even": "must be even",
      "exclusion": "is reserved",
      "expired": "has expired, please request a new one",
      "greater_than": "must be greater than %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "is not included in the list",
      "invalid": "is invalid",
      "less_than": "must be less than %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "not_a_number": "is not a number",
      "not_an_integer": "must be an integer",
      "not_found": "not found",
      "not_locked": "was not locked",
      "not_saved": {
        "one": "1 error prohibited this %{resource} from being saved:",
        "other": "%{count} errors prohibited this %{resource} from being saved:"
      },
      "odd": "must be odd",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "record_invalid": "Validation failed: %{errors}",
      "restrict_dependent_destroy": {
        "many": "Cannot delete record because dependent %{record} exist",
        "one": "Cannot delete record because a dependent %{record} exists"
      },
      "taken": "has already been taken",
      "too_long": {
        "one": "is too long (maximum is 1 character)",
        "other": "is too long (maximum is %{count} characters)"
      },
      "too_short": {
        "one": "is too short (minimum is 1 character)",
        "other": "is too short (minimum is %{count} characters)"
      },
      "wrong_length": {
        "one": "is the wrong length (should be 1 character)",
        "other": "is the wrong length (should be %{count} characters)"
      }
    },
    "template": {
      "body": "There were problems with the following fields:",
      "header": {
        "one": "1 error prohibited this %{model} from being saved",
        "other": "%{count} errors prohibited this %{model} from being saved"
      }
    }
  },
  "flash": {
    "actions": {
      "create": {"notice": "%{resource_name} was successfully created."},
      "destroy": {
        "alert": "%{resource_name} could not be destroyed.",
        "notice": "%{resource_name} was successfully destroyed."
      },
      "update": {"notice": "%{resource_name} was successfully updated."}
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {"display_entries": "Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},
      "one_page": {
        "display_entries": {
          "one": "Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}",
          "other": "Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {"prompt": "Please select"},
    "submit": {"create": "Create %{model}", "submit": "Save %{model}", "update": "Update %{model}"}
  },
  "i18n": {"plural": {"keys": ["one", "other"], "rule": {}}},
  "manage": "Manage",
  "message": {
    "choose_optional_widget_title": "Choose an optional widget title",
    "confirm_delete": "Do you really want to delete %{model} \u003cb\u003e'%{name}'\u003c/b\u003e?",
    "delete_dashboard_confirmation": "Do you really want to delete dashboard \u003cstrong\u003e{{name}}\u003c/strong\u003e?\u003cbr\u003e All of it's widgets are deleted also and cannot be recovered later!\n",
    "error_empty_email": "Please enter an email address",
    "error_empty_password": "Please enter a password",
    "error_in_input_data": {
      "one": "There is 1 error in your input data",
      "other": "There are #{count} errors in your input data"
    },
    "error_loading_dashboard": "Error while loading or updating the Dashbord '{{dashboard.name}}'",
    "error_not_authorized": "You are not authorized to use this function",
    "error_not_logged_in": "Please log in to continue",
    "error_passwords_dont_match": "The two passwords do not match",
    "error_uknown_widget_type": "Unknown widget type",
    "error_wrong_password_or_user_name": "Wrong password or user name",
    "logged_in_as": "Logged in as:",
    "password_remains_unchanged": "Your password remains unchanged",
    "philips_hue_communication_error": "Unfortunately, the communication with the Hue Bridge was not successful.\u003cbr\u003e\u003cbr\u003e Error message:\u003cbr\u003e\u003cbr\u003e \u003cb\u003e%{error}\u003c/b\u003e\n",
    "philips_hue_rename_light": "Please enter the new name of the light and click on 'Save'",
    "philips_hue_unregister_confirmation": "Do you really want to unregister from the Hue-Bridge?",
    "please_log_on": "Please log in",
    "select_a_building": "Please select a building",
    "select_a_floor": "Please select a floor",
    "select_device_for_widget": "Select the device to display in the widget",
    "successfully_changed_password": "Successfully changed your password",
    "successfully_created": "Successfully created %{name}",
    "successfully_deleted": "Successfully deleted %{name}",
    "successfully_saved_profile": "Successfully saved your profile changes",
    "successfully_updated": "Successfully updated %{name}"
  },
  "models": {
    "building": {"one": "Building", "other": "Buildings"},
    "cipcam_device": {"one": "Camera", "other": "Cameras"},
    "dashboard": {"one": "Dashboard", "other": "Dashboards"},
    "device": {"one": "Device", "other": "Devices"},
    "device_actions": {"one": "Action", "other": "Actions"},
    "device_script": {"one": "Script", "other": "Scripts"},
    "dimmer_device": {"one": "Dimmer", "other": "Dimmer"},
    "dimmer_rgb_device": {"one": "RGB Dimmer", "other": "RGB Dimmer"},
    "easyvr_device": {"one": "EasyVR", "other": "EasyVRs"},
    "floor": {"one": "Floor", "other": "Floors"},
    "philips_hue_light_device": {"one": "Philips Hue Light", "other": "Philips Hue Lig ht"},
    "reflow_oven_device": {"one": "Reflow Oven", "other": "Reflow Ovens"},
    "remote_control_device": {"one": "Remote Control", "other": "Remote Controls"},
    "room": {"one": "Room", "other": "Rooms"},
    "rotary_knob_device": {"one": "Rotary Knob", "other": "Rotary Knob"},
    "sensor_device": {"one": "Sensor", "other": "Sensors"},
    "switch_device": {"one": "Switch", "other": "Switches"},
    "user": {"one": "User", "other": "Users"},
    "widget": {"one": "Widget", "other": "Widgets"}
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Billion",
          "million": "Million",
          "quadrillion": "Quadrillion",
          "thousand": "Thousand",
          "trillion": "Trillion",
          "unit": ""
        }
      },
      "format": {"delimiter": "", "precision": 3, "significant": true, "strip_insignificant_zeros": true},
      "storage_units": {
        "format": "%n %u",
        "units": {"byte": {"one": "Byte", "other": "Bytes"}, "gb": "GB", "kb": "KB", "mb": "MB", "tb": "TB"}
      }
    },
    "percentage": {"format": {"delimiter": "", "format": "%n%"}},
    "precision": {"format": {"delimiter": ""}}
  },
  "placeholder": {"search": "Search..."},
  "profile": "Profile",
  "settings": "Settings",
  "support": {"array": {"last_word_connector": ", and ", "two_words_connector": " and ", "words_connector": ", "}},
  "system": "System",
  "time": {
    "am": "am",
    "formats": {"default": "%a, %d %b %Y %H:%M:%S %z", "long": "%B %d, %Y %H:%M", "short": "%d %b %H:%M"},
    "pm": "pm"
  },
  "title": {
    "add_widgets_to_your_dashboard": "Add widgets to your dashboard!",
    "app": "Caretaker",
    "create_a_dashboard": "Create a dashboard!",
    "create_dashboard": "Create a new dashboard",
    "dashboard_properties": "Dashboard properties",
    "delete_confirmation": "Please confirm deletion",
    "edit_model": "Edit %{model} %{name}",
    "index_model": "%{model}",
    "new_model": "Create %{model}",
    "philips_hue": "Philips Hue",
    "settings": "Settings",
    "show_model": "%{model} %{name}",
    "sign_in": "Sign in",
    "documentation": "Documentation"
  },
  "views": {
    "pagination": {
      "first": "\u0026laquo; First",
      "last": "Last \u0026raquo;",
      "next": "Next \u0026rsaquo;",
      "previous": "\u0026lsaquo; Prev",
      "truncate": "\u0026hellip;"
    }
  }
});
I18n.translations["de"] = I18n.extend((I18n.translations["de"] || {}), {
  "account": "Account",
  "action": {
    "add_widget": "Widget hinzufügen",
    "back": "Zurück",
    "cancel": "Abbrechen",
    "change_password": "Passwort ändern",
    "change_your_password": "Ändern Sie Ihr Passwort",
    "close": "Schließen",
    "create_dashboard": "Dashboard anlegen",
    "create_widget": "Widget anlegen",
    "dashboards": "Dashboards",
    "delete": "Löschen",
    "delete_dashboard": "Dashboard löschen",
    "edit": "Bearbeiten",
    "edit_widget": "Widget bearbeiten",
    "edit_your_profile": "Ändern Sie Ihr Profil",
    "enter_dashboard_name": "Dashboard Namen angeben",
    "help": "Hilfe",
    "help_about": "Über",
    "home": "Start",
    "new": "Neu",
    "new_dashboard": "Neues Dashboard",
    "no": "Nein",
    "off": "Aus",
    "ok": "Ok",
    "on": "Ein",
    "philips_hue_bridge_register": "An der Hue-Bridge registrieren (Hue Knopf drücken!)",
    "philips_hue_bridge_unregister": "Von der Hue-Bridge abmelden",
    "philips_hue_synchronize_lights": "Lampen mit der Datenbank synchronisieren",
    "reload_dashboard": "Aktualisieren",
    "rename": "Umbenennen",
    "save": "Speichern",
    "save_profile": "Profil speichern",
    "sign_in": "Anmelden",
    "sign_out": "Abmelden",
    "widget_properties": "Widget Eigenschaften",
    "yes": "Ja"
  },
  "attributes": {
    "device_action": {
      "description": "Beschreibung",
      "name": "Name",
      "name_hint": "Eindeutiger Skript-Name",
      "script": "Skript",
      "script_hint": "Hier können Sie Ihr Aktions-Skript schreiben"
    },
    "building": {"description": "Beschreibung", "name": "Name"},
    "cipcam_device": {"password": "Passwort", "refresh_interval": "Aktualisierung", "user": "Benutzer"},
    "dashboard": {"default": "Standard", "name": "Name", "user": {"name": "Benutzer"}},
    "device": {"address": "Adresse", "description": "Beschreibung", "name": "Name", "type": "Typ", "uuid": "UUID"},
    "device_script": {
      "description": "Beschreibung",
      "enabled": "Aktiv",
      "name": "Name",
      "name_hint": "Eindeutiger Skript-Name",
      "script": "Skript",
      "script_hint": "Hier können Sie Ihr Geräte-Skript schreiben"
    },
    "easyvr_device": {"buttons_per_row": "Tasten pro Zeile", "num_buttons": "Anzahl der Tasten"},
    "floor": {"description": "Beschreibung", "name": "Name"},
    "philips_hue": {
      "application_id": "Applikations ID",
      "bridge": "Bridge",
      "bridge_uri": "Bridge URI",
      "light": {
        "brightness": "Helligkeit",
        "hue": "Farbton",
        "mode": "Modus",
        "name": "Name",
        "reachable": "Erreichbar",
        "saturation": "Sättigung",
        "type": "Typ",
        "uniqueid": "ID"
      },
      "lights": "Lampen"
    },
    "remote_control_device": {"buttons_per_row": "Tasten pro Zeile", "num_buttons": "Anzahl der Tasten"},
    "room": {"description": "Beschreibung", "number": "Nummer"},
    "switch_device": {"num_switches": "Anzahl der Schalter", "switches_per_row": "Anzahl Schalter pro Zeile"},
    "user": {
      "email": "Email",
      "last_sign_in_at": "Letzte Anmeldung",
      "name": "Name",
      "new_password": "New Password",
      "password": "Passwort",
      "password_confirmation": "Passwort bestätigen",
      "remember_me": "Angemeldet bleiben",
      "roles": "Rollen"
    },
    "widget": {"height": "Höhe", "title": "Title", "width": "Breite"}
  },
  "date": {
    "abbr_day_names": ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    "abbr_month_names": [null, "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    "day_names": ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    "formats": {"default": "%d.%m.%Y", "long": "%e. %B %Y", "short": "%e. %b"},
    "month_names": [null, "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    "order": ["day", "month", "year"]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {"one": "etwa eine Stunde", "other": "etwa %{count} Stunden"},
      "about_x_months": {"one": "etwa ein Monat", "other": "etwa %{count} Monate"},
      "about_x_years": {"one": "etwa ein Jahr", "other": "etwa %{count} Jahre"},
      "almost_x_years": {"one": "fast ein Jahr", "other": "fast %{count} Jahre"},
      "half_a_minute": "eine halbe Minute",
      "less_than_x_minutes": {"one": "weniger als eine Minute", "other": "weniger als %{count} Minuten"},
      "less_than_x_seconds": {"one": "weniger als eine Sekunde", "other": "weniger als %{count} Sekunden"},
      "over_x_years": {"one": "mehr als ein Jahr", "other": "mehr als %{count} Jahre"},
      "x_days": {"one": "ein Tag", "other": "%{count} Tage"},
      "x_minutes": {"one": "eine Minute", "other": "%{count} Minuten"},
      "x_months": {"one": "ein Monat", "other": "%{count} Monate"},
      "x_seconds": {"one": "eine Sekunde", "other": "%{count} Sekunden"}
    },
    "prompts": {
      "day": "Tag",
      "hour": "Stunden",
      "minute": "Minuten",
      "month": "Monat",
      "second": "Sekunden",
      "year": "Jahr"
    }
  },
  "description": {
    "add_widgets_to_your_dashboard": "Sie können dem Dashboard Widgets hinzufügen, indem Sie auf den Button 'Widget hinzufügen' klicken.",
    "create_your_first_dashboard": "Erzeugen Sie Ihr erstes Dashboard, indem Sie auf die Schaltfläche 'Dashboard anlegen' klicken.",
    "there_are_no_fields_for_this_fieldset": "Hier müssen keine Angaben gemacht werden.",
    "you_currently_have_no_dashboard": "Sie haben noch kein Dashboard.",
    "your_dashboard_is_empty": "Ihr Dashboard ist momentan leer."
  },
  "devise": {
    "confirmations": {
      "confirmed": "Vielen Dank für Ihre Registrierung. Sie sind jetzt angemeldet.",
      "send_instructions": "Sie erhalten in wenigen Minuten eine E-Mail, mit der Sie Ihre Registrierung bestätigen können.",
      "send_paranoid_instructions": "Falls Ihre E-Mail-Adresse in unserer Datenbank existiert, erhalten Sie in wenigen Minuten eine E-Mail mit der Sie Ihre Registrierung bestätigen können."
    },
    "failure": {
      "already_authenticated": "Sie sind bereits angemeldet.",
      "inactive": "Ihr Account ist nicht aktiv.",
      "invalid": "Ungültige Anmeldedaten.",
      "invalid_token": "Invalid authentication token.",
      "last_attempt": "Sie haben noch einen Versuch bis Ihr Account gesperrt wird.",
      "locked": "Ihr Account ist gesperrt.",
      "not_found_in_database": "Ungültige Anmeldedaten.",
      "timeout": "Ihre Sitzung ist abgelaufen, bitte melden Sie sich erneut an.",
      "unauthenticated": "Sie müssen sich anmelden oder registrieren, bevor Sie fortfahren können.",
      "unconfirmed": "Sie müssen Ihren Account bestätigen, bevor Sie fortfahren können."
    },
    "mailer": {
      "confirmation_instructions": {"subject": "Anleitung zur Bestätigung Ihres Accounts"},
      "reset_password_instructions": {"subject": "Anleitung für das Zurücksetzen Ihres Passworts"},
      "unlock_instructions": {"subject": "Anleitung für die Account-Freischaltung"}
    },
    "omniauth_callbacks": {
      "failure": "Sie konnten nicht mit Ihrem %{kind}-Account angemeldet werden, weil \"%{reason}\".",
      "success": "Sie haben sich erfolgreich mit Ihrem %{kind}-Account angemeldet."
    },
    "passwords": {
      "no_token": "Sie können sich nicht auf dieser Seite anmelden, wenn Sie nicht von einer Passwort-Zurücksetzen-E-Mail kommen. Wenn Sie von solch einer E-Mail kommen, überprüfen Sie bitte, ob Sie die gesamte URL verwendeten.",
      "send_instructions": "Sie erhalten in wenigen Minuten eine E-Mail mit der Anleitung, wie Sie Ihr Passwort zurücksetzen können.",
      "send_paranoid_instructions": "Falls Ihre E-Mail-Adresse in unserer Datenbank existiert, erhalten Sie in wenigen Minuten eine E-Mail mit der Anleitung, wie Sie Ihr Passwort zurücksetzen können.",
      "updated": "Ihr Passwort wurde geändert. Sie sind jetzt angemeldet.",
      "updated_not_active": "Ihr Passwort wurde geändert."
    },
    "registrations": {
      "destroyed": "Ihr Account wurde gelöscht.",
      "signed_up": "Sie haben sich erfolgreich registriert.",
      "signed_up_but_inactive": "Sie haben sich erfolgreich registriert. Wir konnten Sie jedoch nicht anmelden, weil Ihr Account noch nicht aktiviert ist.",
      "signed_up_but_locked": "Sie haben sich erfolgreich registriert. Wir konnten Sie jedoch nicht anmelden, weil Ihr Account gesperrt ist.",
      "signed_up_but_unconfirmed": "Sie erhalten in wenigen Minuten eine E-Mail mit einem Link für die Bestätigung der Registrierung. Klicken Sie auf den Link um Ihren Account zu aktivieren.",
      "update_needs_confirmation": "Ihre Daten wurden aktualisiert, aber Sie müssen Ihre neue E-Mail-Adresse bestätigen. Sie erhalten in wenigen Minuten eine E-Mail, mir der Sie die Änderung Ihrer E-Mail-Adresse abschließen können.",
      "updated": "Ihre Daten wurden aktualisiert."
    },
    "sessions": {
      "already_signed_out": "Erfolgreich abgemeldet.",
      "signed_in": "Erfolgreich angemeldet.",
      "signed_out": "Erfolgreich abgemeldet."
    },
    "unlocks": {
      "send_instructions": "Sie erhalten in wenigen Minuten eine E-Mail mit der Anleitung, wie Sie Ihren Account entsperren können.",
      "send_paranoid_instructions": "Falls Ihre E-Mail-Adresse in unserer Datenbank existiert, erhalten Sie in wenigen Minuten eine E-Mail mit der Anleitung, wie Sie Ihren Account entsperren können.",
      "unlocked": "Ihr Account wurde entsperrt. Sie sind jetzt angemeldet."
    }
  },
  "documentation": "Dokumentation",
  "errors": {
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "muss akzeptiert werden",
      "already_confirmed": "wurde bereits bestätigt, bitte versuchen Sie, sich anzumelden",
      "blank": "muss ausgefüllt werden",
      "confirmation": "stimmt nicht mit %{attribute} überein",
      "confirmation_period_expired": "musste innerhalb von %{period} bestätigt werden, bitte neu anfordern.",
      "empty": "muss ausgefüllt werden",
      "equal_to": "muss genau %{count} sein",
      "even": "muss gerade sein",
      "exclusion": "ist nicht verfügbar",
      "expired": "ist abgelaufen, bitte neu anfordern",
      "greater_than": "muss größer als %{count} sein",
      "greater_than_or_equal_to": "muss größer oder gleich %{count} sein",
      "inclusion": "ist kein gültiger Wert",
      "invalid": "ist nicht gültig",
      "less_than": "muss kleiner als %{count} sein",
      "less_than_or_equal_to": "muss kleiner oder gleich %{count} sein",
      "not_a_number": "ist keine Zahl",
      "not_an_integer": "muss ganzzahlig sein",
      "not_found": "nicht gefunden",
      "not_locked": "ist nicht gesperrt",
      "not_saved": {
        "one": "Konnte %{resource} nicht speichern: ein Fehler.",
        "other": "Konnte %{resource} nicht speichern: %{count} Fehler."
      },
      "odd": "muss ungerade sein",
      "other_than": "darf nicht gleich %{count} sein",
      "present": "darf nicht ausgefüllt werden",
      "record_invalid": "Gültigkeitsprüfung ist fehlgeschlagen: %{errors}",
      "restrict_dependent_destroy": {
        "many": "Datensatz kann nicht gelöscht werden, da abhängige %{record} existieren.",
        "one": "Datensatz kann nicht gelöscht werden, da ein abhängiger %{record}-Datensatz existiert."
      },
      "taken": "ist bereits vergeben",
      "too_long": "ist zu lang (mehr als %{count} Zeichen)",
      "too_short": "ist zu kurz (weniger als %{count} Zeichen)",
      "wrong_length": "hat die falsche Länge (muss genau %{count} Zeichen haben)"
    },
    "template": {
      "body": "Bitte überprüfen Sie die folgenden Felder:",
      "header": {
        "one": "Konnte %{model} nicht speichern: ein Fehler.",
        "other": "Konnte %{model} nicht speichern: %{count} Fehler."
      }
    }
  },
  "flash": {
    "actions": {
      "create": {"notice": "%{resource_name} was successfully created."},
      "destroy": {
        "alert": "%{resource_name} could not be destroyed.",
        "notice": "%{resource_name} was successfully destroyed."
      },
      "update": {"notice": "%{resource_name} was successfully updated."}
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {"display_entries": "Zeige %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e von \u003cb\u003e%{total}\u003c/b\u003e gesamt"},
      "one_page": {
        "display_entries": {
          "one": "Zeige \u003cb\u003e1\u003c/b\u003e %{entry_name}",
          "other": "Zeige \u003cb\u003ealle %{count}\u003c/b\u003e %{entry_name}",
          "zero": "Kein %{entry_name} gefunden"
        }
      }
    },
    "select": {"prompt": "Bitte wählen"},
    "submit": {"create": "%{model} erstellen", "submit": "%{model} speichern", "update": "%{model} aktualisieren"}
  },
  "i18n": {
    "plural": {"keys": ["one", "other"], "rule": {}},
    "transliterate": {"rule": {"Ä": "Ae", "Ö": "Oe", "Ü": "Ue", "ß": "ss", "ä": "ae", "ö": "oe", "ü": "ue"}}
  },
  "manage": "Verwaltung",
  "message": {
    "choose_optional_widget_title": "Geben Sie einen optionalen Widget-Titel ein",
    "confirm_delete": "Soll %{model} \u003cb\u003e'%{name}'\u003c/b\u003e wirklich gelöscht werden?",
    "delete_dashboard_confirmation": "Soll das Dashboard \u003cstrong\u003e{{name}}\u003c/strong\u003e wirklich gelöscht werden?\u003cbr\u003e Alle Widgets werden ebenfalls gelöscht und können später nicht wieder hergestellt werden!\n",
    "error_empty_email": "Bitte geben Sie eine Email-Adresse ein",
    "error_empty_password": "Bitte geben Sie ein Passwort ein",
    "error_in_input_data": {
      "one": "Es gibt einen Fehler in Ihren Eingabedaten",
      "other": "Es gibt #{count} Fehler in Ihren Eingabedaten"
    },
    "error_loading_dashboard": "Beim Laden des Dashboards '{{dashboard.name}}' ist ein Fehler aufgetreten",
    "error_not_authorized": "Sie sind nicht berechtigt diese Funktion aufzurufen",
    "error_not_logged_in": "Bitte melden Sie sich an um fortzufahren",
    "error_passwords_dont_match": "Die beiden Passwörter stimmen nicht überein",
    "error_uknown_widget_type": "Unbekannter Widget Typ",
    "error_wrong_password_or_user_name": "Falsches Passwort oder falscher Benutzername",
    "logged_in_as": "Angemeldet als:",
    "password_remains_unchanged": "Ihr Passwort wurde nicht geändert",
    "philips_hue_communication_error": "Die Kommunikation mit der Hue Bridge war leider nicht erfolgreich.\u003cbr\u003e\u003cbr\u003e Fehlermeldung:\u003cbr\u003e\u003cbr\u003e \u003cb\u003e%{error}\u003c/b\u003e\n",
    "philips_hue_rename_light": "Bitte geben Sie den neuen Namen der Lampe ein und rücken Sie auf 'Speichern'",
    "philips_hue_unregister_confirmation": "Wollen Sie sich wirklich von der Hue-Bridge abmelden?",
    "please_log_on": "Bitte melden Sie sich an",
    "select_a_building": "Bitte wählen Sie ein Gebäude aus",
    "select_a_floor": "Bitte wählen Sie eine Etage aus",
    "select_device_for_widget": "Wählen Sie das Gerät aus, das dargestellt werden soll",
    "successfully_changed_password": "Ihr Passwort wurde erfolgreich geändert",
    "successfully_created": "%{model} %{name} wurde erfolgreich angelegt",
    "successfully_deleted": "%{model} %{name} wurde erfolgreich gelöscht",
    "successfully_saved_profile": "Ihr Benutzerprofil wurde erfolgreich gespeichert",
    "successfully_updated": "%{model} %{name} wurde erfolgreich gespeichert"
  },
  "models": {
    "building": {"one": "Gebäude", "other": "Gebäude"},
    "cipcam_device": {"one": "Kamera", "other": "Kameras"},
    "dashboard": {"one": "Dashboard", "other": "Dashboards"},
    "device": {"one": "Gerät", "other": "Geräte"},
    "device_action": {"one": "Aktion", "other": "Aktionen"},
    "device_script": {"one": "Skript", "other": "Skripte"},
    "dimmer_device": {"one": "Dimmer", "other": "Dimmer"},
    "dimmer_rgb_device": {"one": "RGB Dimmer", "other": "RGB Dimmer"},
    "easyvr_device": {"one": "EasyVR", "other": "EasyVRs"},
    "floor": {"one": "Etage", "other": "Etagen"},
    "philips_hue_light_device": {"one": "Philips Hue Light", "other": "Philips Hue Lights"},
    "reflow_oven_device": {"one": "Reflow Oven", "other": "Reflow Ovens"},
    "remote_control_device": {"one": "Fernsteuerung", "other": "Fernsteuerungen"},
    "room": {"one": "Raum", "other": "Räume"},
    "rotary_knob_device": {"one": "Drehknopf", "other": "Drehknopf"},
    "sensor_device": {"one": "Sensor", "other": "Sensoren"},
    "switch_device": {"one": "Schalter", "other": "Schalter"},
    "user": {"one": "Benutzer", "other": "Benutzer"},
    "widget": {"one": "Widget", "other": "Widgets"}
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ".",
        "format": "%n %u",
        "precision": 2,
        "separator": ",",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "€"
      }
    },
    "format": {
      "delimiter": ".",
      "precision": 2,
      "separator": ",",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": {"one": "Milliarde", "other": "Milliarden"},
          "million": "Millionen",
          "quadrillion": {"one": "Billiarde", "other": "Billiarden"},
          "thousand": "Tausend",
          "trillion": "Billionen",
          "unit": ""
        }
      },
      "format": {"delimiter": "", "precision": 3, "significant": true, "strip_insignificant_zeros": true},
      "storage_units": {
        "format": "%n %u",
        "units": {"byte": {"one": "Byte", "other": "Bytes"}, "gb": "GB", "kb": "KB", "mb": "MB", "tb": "TB"}
      }
    },
    "percentage": {"format": {"delimiter": "", "format": "%n%"}},
    "precision": {"format": {"delimiter": ""}}
  },
  "placeholder": {"search": "Suche..."},
  "profile": "Profil",
  "settings": "Einstellungen",
  "support": {"array": {"last_word_connector": " und ", "two_words_connector": " und ", "words_connector": ", "}},
  "system": "System",
  "time": {
    "am": "vormittags",
    "formats": {
      "default": "%A, %d. %B %Y, %H:%M Uhr",
      "long": "%A, %d. %B %Y, %H:%M Uhr",
      "short": "%d. %B, %H:%M Uhr"
    },
    "pm": "nachmittags"
  },
  "title": {
    "add_widgets_to_your_dashboard": "Fügen Sie Ihrem Dashboard Widgets hinzu!",
    "app": "Caretaker",
    "create_a_dashboard": "Legen Sie ein Dashboard an!",
    "create_dashboard": "Neues Dashboard anlegen",
    "dashboard_properties": "Dashboard Eigenschaften",
    "delete_confirmation": "Bitte bestätigen Sie die Löschung",
    "edit_model": "Bearbeitung %{model} %{name}",
    "index_model": "%{model}",
    "new_model": "Neuanlage %{model}",
    "philips_hue": "Philips Hue",
    "settings": "Einstellungen",
    "show_model": "%{model} %{name}",
    "sign_in": "Anmeldung",
    "documentation": "Dokumentation"
  },
  "views": {
    "pagination": {
      "first": "\u0026laquo; Anfang",
      "last": "Ende \u0026raquo;",
      "next": "Weiter \u0026rsaquo;",
      "previous": "\u0026lsaquo; Zurück",
      "truncate": "\u0026hellip;"
    }
  }
});
