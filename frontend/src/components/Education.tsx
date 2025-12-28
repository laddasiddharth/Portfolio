import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  fieldOfStudy: string;
  startYear: number;
  endYear?: number;
  gpa?: string;
  achievements?: string;
}

export default function Education() {
  // TODO: Add your education details here manually
  const education: EducationEntry[] = [];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and qualifications.
            </p>
          </div>

          {education && education.length > 0 ? (
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-accent/50 transition-all">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                        <div className="bg-accent/10 p-2 rounded-lg">
                          <GraduationCap className="h-5 w-5 text-accent" />
                        </div>
                        {edu.degree}
                      </h3>
                      <p className="text-base font-semibold text-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.fieldOfStudy}</p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <div className="flex items-center gap-1 text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full inline-flex">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {edu.startYear} - {edu.endYear ? edu.endYear : 'Present'}
                        </span>
                      </div>
                    </div>
                  </div>
                  {(edu.gpa || edu.achievements) && (
                    <div className="mt-4 space-y-3 pt-4 border-t border-border">
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-accent" />
                          <span className="text-sm">
                            <span className="font-medium">GPA:</span> <span className="text-accent font-semibold">{edu.gpa}</span>
                          </span>
                        </div>
                      )}
                      {edu.achievements && (
                        <div>
                          <p className="text-sm font-medium mb-1">Achievements:</p>
                          <p className="text-sm text-muted-foreground">{edu.achievements}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-border rounded-lg">
              <p className="text-muted-foreground">Add your education details manually in the Education component.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
