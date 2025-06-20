import Swal from 'sweetalert2';

export const showDeleteAlert = ({title, description, onConfirm}) => {
  Swal.fire({
    title: title??'Yakin ingin menghapus?',
    text: description??'Aksi ini tidak bisa dibatalkan.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#9B5738',   // Burnt Orange (untuk delete)
    cancelButtonColor: '#B5A98D',    // Warm Gray (untuk cancel)
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Batal',
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm(); 
    //   Swal.fire({
    //     title: 'Terhapus!',
    //     text: 'Data berhasil dihapus.',
    //     icon: 'success',
    //     confirmButtonColor: '#3F6B6B', // Deep Teal untuk success feedback
    //     confirmButtonText: 'OK',
    //   });
    }
  });
};
