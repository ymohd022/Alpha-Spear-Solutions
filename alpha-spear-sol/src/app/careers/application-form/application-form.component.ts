import { Component, Input, Output, EventEmitter } from "@angular/core"

type FileType = 'resume' | 'coverLetterFile' | 'portfolio' | 'transcript';

interface ApplicationFiles {
  resume: File | null;
  coverLetterFile: File | null;
  portfolio: File | null;
  transcript: File | null;
}

interface ApplicationData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    linkedIn: string;
    portfolio: string;
  };
  experience: {
    currentRole: string;
    currentCompany: string;
    yearsExperience: string;
    relevantSkills: string;
    previousRoles: string;
  };
  education: {
    degree: string;
    major: string;
    university: string;
    graduationYear: string;
    gpa: string;
    relevantCoursework: string;
  };
  application: {
    coverLetter: string;
    whyInterested: string;
    availability: string;
    salaryExpectations: string;
    references: string;
  };
  files: ApplicationFiles;
}

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent {
  @Input() position: any
  @Output() formSubmitted = new EventEmitter<void>()

  applicationData: ApplicationData = {
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      linkedIn: "",
      portfolio: "",
    },
    experience: {
      currentRole: "",
      currentCompany: "",
      yearsExperience: "",
      relevantSkills: "",
      previousRoles: "",
    },
    education: {
      degree: "",
      major: "",
      university: "",
      graduationYear: "",
      gpa: "",
      relevantCoursework: "",
    },
    application: {
      coverLetter: "",
      whyInterested: "",
      availability: "",
      salaryExpectations: "",
      references: "",
    },
    files: {
      resume: null,
      coverLetterFile: null,
      portfolio: null,
      transcript: null,
    },
  }

  currentStep = 1
  totalSteps = 4
  isSubmitting = false

  formSteps = [
    { step: 1, title: "Personal Information", icon: "fas fa-user" },
    { step: 2, title: "Experience & Skills", icon: "fas fa-briefcase" },
    { step: 3, title: "Education", icon: "fas fa-graduation-cap" },
    { step: 4, title: "Application Details", icon: "fas fa-file-alt" },
  ]

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--
    }
  }

  goToStep(step: number) {
    this.currentStep = step
  }
onFileSelected(event: any, fileType: FileType) {
    const file = event.target.files[0]
    if (file) {
      this.applicationData.files[fileType] = file
    }
  }

  validateCurrentStep(): boolean {
  switch (this.currentStep) {
    case 1:
      return (
        !!this.applicationData.personalInfo.firstName &&
        !!this.applicationData.personalInfo.lastName &&
        !!this.applicationData.personalInfo.email &&
        !!this.applicationData.personalInfo.phone
      )
    case 2:
      return (
        !!this.applicationData.experience.relevantSkills &&
        !!this.applicationData.experience.yearsExperience
      )
    case 3:
      return (
        !!this.applicationData.education.degree &&
        !!this.applicationData.education.university
      )
    case 4:
      return (
        !!this.applicationData.application.whyInterested &&
        !!this.applicationData.files.resume
      )
    default:
      return true
  }
}

  async submitApplication() {
    if (!this.validateCurrentStep()) {
      return
    }

    this.isSubmitting = true

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Application submitted:", this.applicationData)
      alert("Application submitted successfully! We'll be in touch soon.")
      this.formSubmitted.emit()
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("There was an error submitting your application. Please try again.")
    } finally {
      this.isSubmitting = false
    }
  }

  getStepIcon(step: number): string {
    const stepData = this.formSteps.find((s) => s.step === step)
    return stepData ? stepData.icon : "fas fa-circle"
  }

  isStepCompleted(step: number): boolean {
    return step < this.currentStep
  }

  isStepActive(step: number): boolean {
    return step === this.currentStep
  }
}
