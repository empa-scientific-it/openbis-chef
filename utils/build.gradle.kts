/*
 * This file was generated by the Gradle 'init' task.
 *
 * This is a general purpose Gradle build.
 * Learn more about Gradle by exploring our samples at https://docs.gradle.org/7.6/samples
 * This project uses @Incubating APIs which are subject to change.
 */
repositories {
    maven {
        val gitLabPrivateToken: String? by project
        val ciToken: String? = System.getenv("TOKEN")
        url = uri("https://gitlab.empa.ch/api/v4/projects/1553/packages/maven")
        name = "Empa Gitlab"
        credentials(HttpHeaderCredentials::class) {
            name = "Access"
            value =  ciToken
        }
        authentication {
            create<HttpHeaderAuthentication>("header")
        }
    }
}



   val toCopy by configurations.creating{
        description = "Copy dependencies"
        isCanBeResolved = true
        isCanBeConsumed = false
    }


dependencies{
    toCopy("ch.empa.openbisio:app:0.1.3")
}

tasks.register<Copy>("copyDependencies") {
    from(configurations.getByName("toCopy"))
    into("lib")
}