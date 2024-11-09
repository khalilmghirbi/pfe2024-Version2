import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Profile } from '../models/profile';
import { Media } from '../models/media';
import { Treatment } from '../models/treatment';
import { Doctor } from '../models/doctor';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  removeDoctor(id: string) {
    console.log("remove")
  }
  getSpecialitites(): Observable<string[]> {
    return of(this.specialities).pipe(delay(100));
  }
  getLangs(): Observable<string[]> {
    return of(this.languages).pipe(delay(100));
  }

  clinics: string[] = [
    'City Health Clinic',
    'Sunrise Health Clinic',
    'Lakeside Family Clinic',
    'Mountain View Clinic',
  ];

  languages: string[] = ['English', 'Arabe', 'Frensh'];

  specialities: string[] = ['General Medicine', 'Pediatrics', 'Dermatology'];

  profile: Profile = {
    name: 'City Health Clinic',
    image:
      'https://marketplace.canva.com/EAEyadYkO0s/1/0/1600w/canva-health-care-logo-fSbVHMz-u48.jpg',
    address: '123 Main St',
    city: 'Anytown',
    openingYear: 2000,
    capacity: 100,
    priceWarrantyCertificate: 1000,
    phone: '123-456-7890',
    services: ['General Medicine', 'Pediatrics', 'Dermatology'],
  };

  contacts: Contact[] = [
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice.johnson@example.com"
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob.smith@example.com"
    },
    {
      id: "3",
      name: "Charlie Brown",
      email: "charlie.brown@example.com"
    },
    {
      id: "4",
      name: "David Lee",
      email: "david.lee@example.com"
    },
    {
      id: "5",
      name: "Eva White",
      email: "eva.white@example.com"
    }
  ];

  doctors: Doctor[] = [
    {
      id: 'Dr. John Doe',
      name: 'Dr. John Doe',
      photo: 'https://example.com/photos/john_doe.jpg',
      cv: 'https://example.com/cvs/john_doe.pdf',
      specialities: ['Cardiology', 'Internal Medicine'],
      languages: ['English', 'Spanish'],
    },
    {
      id: 'Dr. Jane Smith',
      name: 'Dr. Jane Smith',
      photo: 'https://example.com/photos/jane_smith.jpg',
      cv: 'https://example.com/cvs/jane_smith.pdf',
      specialities: ['Pediatrics', 'Neonatology'],
      languages: ['English', 'French'],
    },
    {
      id: 'Dr. Emily Johnson',
      name: 'Dr. Emily Johnson',
      specialities: ['Dermatology'],
      languages: ['English'],
    },
    {
      id: 'Dr. Michael Brown',
      name: 'Dr. Michael Brown',
      photo: 'https://example.com/photos/michael_brown.jpg',
      specialities: ['Orthopedics', 'Sports Medicine'],
      languages: ['English', 'German'],
    },
  ];

  medias: Media[] = [
    {
      name: 'City Health Clinic',
      image:
        'https://marketplace.canva.com/EAEyadYkO0s/1/0/1600w/canva-health-care-logo-fSbVHMz-u48.jpg',
      language: ['All'],
    },
    {
      name: 'City Health Clinic',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f6/H%C3%B4ptal_am%C3%A9ricain_de_Neuilly_2011.jpg',
      language: ['English'],
    },
    {
      name: 'City Health Clinic',
      image:
        'https://media.gettyimages.com/id/1312706413/fr/photo/b%C3%A2timent-moderne-dh%C3%B4pital.jpg?s=612x612&w=gi&k=20&c=uDT_aoo1Tdi_HdKddXUaaB19YVDgwsjP4upK99Vj0gc=',
      language: ['English', 'Spanish'],
    },
  ];

  treatments: Treatment[] = [
    {
      name: 'General Medicine',
      capacity: 100,
    },
    {
      name: 'Pediatrics',
      capacity: 150,
    },
    {
      name: 'Dermatology',
      capacity: 200,
    },
  ];

  constructor() {}

  getClinics(): Observable<{ id: string; name: string }[]> {
    return of(this.clinics).pipe(
      map((clinics) =>
        clinics.map((clinic, index) => ({ id: index.toString(), name: clinic }))
      ),
      delay(100)
    );
  }

  getTreatments(): Observable<Treatment[]> {
    return of(this.treatments).pipe(delay(100));
  }

  getProfile(id: string): Observable<Profile> {
    return of(this.profile).pipe(delay(100));
  }

  getDoctors(id: string): Observable<Doctor[]> {
    return of(this.doctors).pipe(delay(100));
  }

  getContracts(id: string): Observable<Contact[]> {
    return of(this.contacts).pipe(delay(100));
  }

  updateProfile(profile: Profile): Observable<Profile> {
    this.profile = profile;
    return of(profile).pipe(delay(100));
  }

  addProcedure(procedure: Treatment): Observable<Treatment[]> {
    this.treatments.push(procedure);
    return this.getTreatments();
  }

  addDoctor(id: string, doctor: Doctor): Observable<Doctor[]> {
    this.doctors.push(doctor);
    return this.getDoctors('0');
  }

  addContact(id: string, contact: Contact): Observable<Contact[]> {
    this.contacts.push(contact);
    return this.getContracts('0');
  }

  getMedias(id: string): Observable<Media[]> {
    return of(this.medias).pipe(delay(100));
  }
}
